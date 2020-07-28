const { getAll } = require('../src/services/todo.js');

test('Make sure function returns an object (array)', async () => {
  let arr = await getAll();
  expect(typeof arr).toBe("object");
  expect(typeof arr.length).toBe("number");
  expect(typeof arr.join()).toBe("string");
});

test('Testing the type of the first object', async () => {
  let arr = await getAll();
  let size = arr.length;
  if(size > 0){
    let firstObj = arr[0];
    expect(typeof firstObj).toBe("object");
  }
});
