import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function header() {
  const headerSection = document.createElement('header');
  const title = document.createElement('h1');
  title.classList.add('headerTitle');
  title.textContent = 'Le Véritable';
  headerSection.appendChild(title);
  return headerSection;
}

function activateButtons() {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((buttonS) => {
        buttonS.classList.remove('active');
      });
      button.classList.add('active');
    });
  });
}

function nav() {
  const navSection = document.createElement('nav');
  navSection.classList.add('navSection');
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    activateButtons(homeButton);
    loadHome();
  });
  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    activateButtons(menuButton);
    loadMenu();
  });
  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    activateButtons(contactButton);
    loadContact();
  });
  navSection.appendChild(homeButton);
  navSection.appendChild(menuButton);
  navSection.appendChild(contactButton);
  return navSection;
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerText = document.createElement('p');
  footerText.classList.add('footerText');
  footerText.textContent = '© Aaliyah Montgomery';

  const imageCredit = document.createElement('p');
  imageCredit.classList.add('imageCredit');
  imageCredit.textContent = 'Photo by Rachel Claire';

  const creditLink = document.createElement('a');
  creditLink.classList.add('creditLink');
  creditLink.href =
    'https://www.pexels.com/photo/row-of-stools-next-to-long-table-covered-with-tablecloth-in-dark-hall-4577179/';

  creditLink.appendChild(imageCredit);
  footer.appendChild(creditLink);
  footer.appendChild(footerText);

  return footer;
}

function loadWebsite() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(nav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  activateButtons(document.querySelector('.nav-button'));
  loadHome();
}

export default loadWebsite;
