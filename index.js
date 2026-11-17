const listEl = document.querySelector('.list');
const addBtnEl = document.querySelector('.add');
const removeBtnEl = document.querySelector('.remove');

const addItem = () => {
  const itemEl = document.createElement('li');
  itemEl.textContent = 'Новый элемент списка';
  listEl.appendChild(itemEl);
};

const removeItem = () => {
  const lastItemEl = listEl.lastElementChild;

  if (lastItemEl) {
    lastItemEl.remove();
  }
};

addBtnEl.addEventListener('click', addItem);
removeBtnEl.addEventListener('click', removeItem);