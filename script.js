/* initial counters */
let loveCount = 0;
let coinCount = 100;
let copyCount = 0;

/* DOM references */
const loveEl = document.getElementById('love-count');
const coinEl = document.getElementById('coin-count');
const copyEl = document.getElementById('copy-count'); 
const navbarCopyBtn = document.getElementById('copy-btn');
const historyList = document.querySelector('.history-list');
const clearBtn = document.querySelector('.clear-btn');

/* helper to refresh navbar counters */
function refreshUI() {
  loveEl.textContent = loveCount;
  coinEl.textContent = coinCount;
  copyEl.textContent = copyCount;
}

/* navbar copy button increments navbar copy counter */
if (navbarCopyBtn) {
  navbarCopyBtn.addEventListener('click', () => {
    copyCount++;
    refreshUI();
  });
}

/* card copy buttons (copy individual card number) */
document.querySelectorAll('.card-copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const numberEl = card.querySelector('.number');
    const number = numberEl ? numberEl.innerText.trim() : '';
    if (!number) return;

    // copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(number).then(() => {
        alert(`Number copied.\nHotline Number: ${number}`);
      }).catch(() => {
        alert(`Number copied.\nHotline Number: ${number} (fallback)`);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = number;
      document.body.appendChild(ta);
      ta.select();
      try { 
        document.execCommand('copy'); 
        alert(`Number copied.\nHotline Number: ${number}`); 
      }
      catch (err) { alert('Copy failed'); }
      document.body.removeChild(ta);
    }

    // increment copy counter
    copyCount++;
    refreshUI();
  });
});

/* card call buttons */
document.querySelectorAll('.card-call-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const titleEl = card.querySelector('h3');
    const subtitleEl = card.querySelector('p');
    const numberEl = card.querySelector('.number');

    const title = titleEl ? titleEl.innerText.trim() : 'Unknown';
    const subtitle = subtitleEl ? subtitleEl.innerText.trim() : '';
    const number = numberEl ? numberEl.innerText.trim() : '-';

    // check coins
    if (coinCount < 20) {
      alert("You don’t have enough coins. A minimum of 20 coins is required to make a call.");
      return;
    }

    // deduct coins
    coinCount -= 20;

    // show alert (without labels)
    alert(`${title}\n${subtitle}\n${number}`);

    // add to history
    const time = new Date().toLocaleTimeString();
    const li = document.createElement('li');
    li.className = 'flex items-center';
    li.innerHTML = `<i class="fa-regular fa-clock mr-2"></i>
                    <span class="truncate">${title} - ${number}</span>
                    <span class="ml-auto text-xs text-gray-500">${time}</span>`;
    if (historyList) historyList.prepend(li);

    refreshUI();
  });
});

/* clear history button */
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (historyList) historyList.innerHTML = '';
  });
}

/* favourite heart toggles */
document.querySelectorAll('.fav-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular', 'text-gray-500');
      icon.classList.add('fa-solid', 'text-red-500');
      loveCount++;
    } else {
      icon.classList.remove('fa-solid', 'text-red-500');
      icon.classList.add('fa-regular', 'text-gray-500');
      loveCount = Math.max(0, loveCount - 1);
    }
    refreshUI();
  });
});

/* initial UI render */
refreshUI();

