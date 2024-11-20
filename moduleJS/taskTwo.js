const element = () => {
  const plus = document.querySelector('.plus');
  const minus = document.querySelector('.minus');
  const ratingBtn = document.querySelector('.ratingBtn');
  const modalWindow = document.querySelector('.modal');
  const documentElem = document.documentElement;

  plus.addEventListener('click', () => {
    let results = ratingBtn.innerHTML;
    ratingBtn.innerHTML = ++results;
  });

  minus.addEventListener('click', () => {
    let results = ratingBtn.innerHTML;
    ratingBtn.innerHTML = --results;
  });

  ratingBtn.addEventListener('click', e => {
    e.preventDefault();
    modalWindow.classList.add('active');
  });

  documentElem.addEventListener('click', e => {
    if (e.target === e.target.closest('.cross') || e.target !== ratingBtn) {
      modalWindow.classList.remove('active');
    }
  });
};

element();
