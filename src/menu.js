function menuFood(name, price) {
  const menuFoods = document.createElement('div');
  menuFood.classList.add('menuFood');

  const saladItem = document.createElement('p');
  saladItem.textContent = `${name  } ${  price}`;

  const soupItem = document.createElement('p');
  soupItem.textContent = `${name  } ${  price}`;

  const drinkItem1 = document.createElement('p');
  drinkItem1.textContent = `${name  } ${  price}`;

  const drinkItem2 = document.createElement('p');
  drinkItem2.textContent = `${name  } ${  price}`;

  const mainCourseItem1 = document.createElement('p');
  mainCourseItem1.textContent = `${name  } ${  price}`;

  const mainCourseItem2 = document.createElement('p');
  mainCourseItem2.textContent = `${name  } ${  price}`;

  const dessertItem1 = document.createElement('p');
  dessertItem1.textContent = `${name  } ${  price}`;

  const dessertItem2 = document.createElement('p');
  dessertItem2.textContent = `${name  } ${  price}`;

    menuFoods.appendChild(saladItem);
    menuFoods.appendChild(soupItem);
    menuFoods.appendChild(drinkItem1);
    menuFoods.appendChild(drinkItem2);
    menuFoods.appendChild(mainCourseItem1);
    menuFoods.appendChild(mainCourseItem2);
    menuFoods.appendChild(dessertItem1);
    menuFoods.appendChild(dessertItem2);

  return menuFoods;
}

function menuPage() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';

  const soupSalad = document.createElement('h3');
  soupSalad.textContent = 'Soup & Salad';

  const drinks = document.createElement('h3');
  drinks.textContent = 'Drinks';

  const mainCourse = document.createElement('h3');
  mainCourse.textContent = 'Main Course';

  const dessert = document.createElement('h3');
  dessert.textContent = 'Desserts';

  menu.appendChild(menuTitle);
  menu.appendChild(soupSalad);
  menu.appendChild(dessert);
  menu.appendChild(drinks);
  menu.appendChild(mainCourse);
  menu.appendChild(menuFood('Velouté de Homard (Lobster Bisque)', '$30'));
    menu.appendChild(menuFood('', ''));
    menu.appendChild(menuFood('', ''));
    menu.appendChild(menuFood('', ''));
    menu.appendChild(menuFood('', ''));
    menu.appendChild(menuFood('', ''));

  return menu;
}
