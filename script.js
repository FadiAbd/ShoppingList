document
  .getElementById('addItemForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
      addItemToList(newItem);
      itemInput.value = '';
    }
  });

function addItemToList(item) {
  const shoppingList = document.getElementById('shoppingList');
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = item;

  const buyButton = document.createElement('button');
  buyButton.className = 'btn btn-success btn-sm float-right';
  buyButton.textContent = 'Bought';
  buyButton.addEventListener('click', function () {
    li.classList.toggle('shopping-item-bought');
    if (li.classList.contains('shopping-item-bought')) {
      buyButton.textContent = 'Undo';
    } else {
      buyButton.textContent = 'Bought';
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm float-right delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    shoppingList.removeChild(li);
  });

  li.appendChild(buyButton);
  li.appendChild(deleteButton);
  shoppingList.appendChild(li);
}
