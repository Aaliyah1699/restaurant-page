function menuFood(name, price) {
  const menuFoods = document.createElement('div');
  menuFoods.classList.add('menuFood');

  const foodName = document.createElement('p');
  foodName.classList.add('foodName');
  foodName.textContent = name;

  const foodPrice = document.createElement('p');
  foodPrice.classList.add('foodPrice');
  foodPrice.textContent = price;

  menuFoods.appendChild(foodName);
  menuFoods.appendChild(foodPrice);

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
  menu.appendChild(menuFood('Velouté de Homard (Lobster Bisque)', '$28'));
  menu.appendChild(
    menuFood(
      'Salade de Roquette et Parmesan (Arugula and Parmesan Salad)',
      '$22'
    )
  );
  menu.appendChild(
    menuFood('Le Cocktail de la Maison (The House Cocktail)', '$30')
  );
  menu.appendChild(
    menuFood('Château Margaux 2015 (Red Wine) ', '$200 per bottle')
  );
  menu.appendChild(
    menuFood(
      'Filet de Boeuf (Beef Tenderloin) with Truffle Mashed Potatoes and Seasonal Vegetables',
      '$65'
    )
  );
  menu.appendChild(
    menuFood(
      'Homard Grillé (Grilled Lobster) with Herb Butter and Saffron Rice',
      '$75'
    )
  );
  menu.appendChild(
    menuFood('Tarte au Citron (Lemon Tart) with Raspberry Sorbet', '$28')
  );
  menu.appendChild(
    menuFood(
      'Soufflé au Chocolat Noir (Dark Chocolate Souffle) with Vanilla Ice Cream ',
      '$32'
    )
  );

  return menu;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(menuPage());
}
export default loadMenu;
