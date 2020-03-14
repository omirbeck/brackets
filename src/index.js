module.exports = function check(str, bracketsConfig) {
  let object = {};
  let arr = str.split('');
  let stack = [];

  // Создаем объект из bracketsConfig
  bracketsConfig.forEach(item => {
    item.forEach((el, index) => {
      if(index == 0) {
        object[el] = item[1];
      }
    })
  })

  // Перебираем массив arr и находим последовательность скобок
  for (let i = 0; i < arr.length; i++) {
    let length = stack.length - 1;
    if (stack[length] == arr[i]) {
      stack.pop();    
        } else if (arr[i] in object) {
          stack.push(object[arr[i]]);
        } else return false; 
  }
  
  // если стек пуст то true, если нет то false
  return stack.length > 0 ? false : true;

}
