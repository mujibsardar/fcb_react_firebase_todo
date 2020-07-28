import firebase from '../firebase.js';


export function updateStatusTodo(itemId, completed) {
  firebase.database().ref('todos/' + itemId).update({
    completed: completed
  });
}

export function addTodo(text) {
  const itemsRef = firebase.database().ref('todos');
  const todo = {text: text, completed: false}
  itemsRef.push(todo);
}

export function getAllTodos(){
  return new Promise(resolve => {
    const itemsRef = firebase.database().ref('todos');
    itemsRef.on('value', (snapshot) => {
      let todos = snapshot.val();
      let newState = [];
      for (let todo in todos) {
          let obj = {id: todo, text: todos[todo].text, completed: todos[todo].completed }
          newState.push(obj);
        }
        resolve(newState);
      })
    })
}
