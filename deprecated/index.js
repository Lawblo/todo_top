import './style.css';
import Logo from './images/head-check.png';
import { createTodo } from './todo';

const pageTemplate = function () {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('pageContainer');
  pageContainer.appendChild(createSidebar());
  pageContainer.appendChild(pageContent());

  const body = document.querySelector('body');
  body.appendChild(pageContainer);
};

function sidebarMenuOld() {
  const menuItems = ['Home', 'Calendar', 'User', 'Settings'];

  const sidebarMenu = document.createElement('ul');
  sidebarMenu.classList.add('sidebarMenu');
  for (const item of menuItems) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menuItem');
    menuItem.textContent = item;

    sidebarMenu.appendChild(menuItem);
  }

  return sidebarMenu;
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar', 'gridElement');
  sidebar.appendChild(sidebarMenu());

  return sidebar;
}

function createSidebarTop() {
  const sidebarTop = document.createElement('div');
  sidebarTop.classList.add('sidebarTop', 'gridElement');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logoContainer');

  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');
  logoContainer.appendChild(logo);

  const logoText = document.createElement('p');
  logoText.textContent = '_headCheck';
  logoText.classList.add('logoText');
  logoContainer.appendChild(logoText);

  sidebarTop.appendChild(logoContainer);

  return sidebarTop;
}

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header', 'gridElement');

  const headline = document.createElement('h2');
  headline.textContent = 'Headline';
  headline.classList.add('headline');

  header.appendChild(headline);

  return header;
}

function pageContent() {
  const content = document.createElement('div');
  content.classList.add('content', 'gridElement');

  return content;
}

pageTemplate();
/*const content = document.querySelector('.content');
content.appendChild(createTodo());*/
