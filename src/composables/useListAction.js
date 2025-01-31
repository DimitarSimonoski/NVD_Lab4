import {ref } from 'vue';

export function List (initiallist) {

  const list = ref(initiallist);

  const addItem = (newItem) => {
    list.push(newItem);
  }

  const deleteItem = (itemId) => {
    const index = list.value.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      list.value.splice(index, 1);
    }
  };

  return {
    addItem,
    deleteItem
  }

}