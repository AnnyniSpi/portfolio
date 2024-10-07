const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__progress-counter'),
      lines = document.querySelectorAll('.skills__progress-line span');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

console.log(lines);

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});