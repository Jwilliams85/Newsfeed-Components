/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only const
  argument.*/

function CreatemenuItems() {

  
  //Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  //Add those items to the <ul>

  //element

  const menu = document.createElement ('div');
  const menuList = document.createElement ('ul');
  const menuItems2 = document.createElement('li');
  const menuItems3 = document.createElement('li');
  const menuItems4 = document.createElement('li');
  const menuItems5 = document.createElement('li');
  const menuItems6 = document.createElement('li');
  const menuItems7 = document.createElement('li');


// create classes

menu.classList.add('menu')

//Text content
// 'Students',
//   'Faculty',
//   "What's New",
//   'Tech Trends',
//   'Music',
//   'Log Out'

menuItems2.textContent = menuItems[0]
menuItems3.textContent = menuItems[1]
menuItems4.textContent = menuItems[2]
menuItems5.textContent = menuItems[3]
menuItems6.textContent = menuItems[4]
menuItems7.textContent = menuItems[5]

//Select menu-button
const menuButtons = document.querySelector('.menu-button')

//add Event Listner 
menuButtons.addEventListener('click',() => {
  menu.classList.toggle('menu--open')
  menuButtons.style.transform = "scale(1.5)";

})
  //  Create Structure
menu.appendChild(menuList)
menuList.appendChild(menuItems2)
menuList.appendChild(menuItems3)
menuList.appendChild(menuItems4)
menuList.appendChild(menuItems5)
menuList.appendChild(menuItems6)
menuList.appendChild(menuItems7)

return menu;

}

  //Append to the HTML

  const menus = document.querySelector('.header')
  menuItems.forEach((items) => {
    menus.appendChild(CreatemenuItems(items.menuList, items.menuItems2, items.menuItems3, items.menuItems4, items.menuItems5, items.menuItems6, items.menuItems7))

  })




 
  


  
  