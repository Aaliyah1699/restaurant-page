function contactPage() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Contact Us';

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Call to make reservations';

  const contactNumber = document.createElement('p');
  contactNumber.textContent = 'Phone: 555-555-5555';

  const contactEmail = document.createElement('p');
  contactEmail.textContent = 'reservations@leveritable.com';

  const contactAbout = document.createElement('p');
  contactAbout.textContent = 'About Us';

  const contactAboutInfo = document.createElement('p');
  contactAboutInfo.textContent =
    "At Le Véritable, we believe that dining is not just about the food, but the entire experience. From the moment you step into our elegant restaurant, you'll be transported to a world of refinement and sophistication. Our chefs are dedicated to creating dishes that not only taste incredible but are also beautifully presented, making every meal a feast for the eyes as well as the taste buds. We are committed to providing our guests with the highest level of service and attention to detail, ensuring that every visit to Le Véritable is an unforgettable one.";

  contact.appendChild(contactTitle);
  contact.appendChild(contactInfo);
  contact.appendChild(contactNumber);
  contact.appendChild(contactEmail);
  contact.appendChild(contactAbout);
  contact.appendChild(contactAboutInfo);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(contactPage());
}

export default loadContact;
