let navbar = document.querySelector('.navbar');

document.querySelector('#bar-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchArea.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchArea = document.querySelector('.search-area');

document.querySelector('#search-btn').onclick = () => {
  searchArea.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('carts-container');

document.querySelector('cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchArea.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  searchArea.classList.remove('active');
  cartItem.classList.remove('active');
}