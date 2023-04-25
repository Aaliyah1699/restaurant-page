function homePage() {
  const home = document.createElement('div');
  home.classList.add('home');

  const homeTitle = document.createElement('h2');
  homeTitle.textContent = 'Welcome to Le Véritable,';

  const homeInfo = document.createElement('p');
  homeInfo.textContent =
    ' Where every dish is crafted with the finest ingredients and the utmost care. Our culinary experts have carefully curated a menu that combines French tradition with contemporary flair, resulting in an unforgettable dining experience that is truly worthy of the most discerning palate. Our goal is to delight and amaze you with every bite, and we look forward to serving you soon.';

  home.appendChild(homeTitle);
  home.appendChild(homeInfo);

  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(homePage());
}

export default loadHome;
