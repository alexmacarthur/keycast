import debounce from 'lodash.debounce';

class KeyCast {
  constructor () {
    this.initNav();
  }

  initNav () {
    let $nav = document.getElementById('nav');
    document.addEventListener('scroll', () => {
      if(window.pageYOffset > 0) {
        $nav.classList.add('has-scrolled');
      } else {
        $nav.classList.remove('has-scrolled');
      }
    });
  }
}

new KeyCast;
