// -------------------------- Home work 5 --------------------------
// -------------------------- Курочка Екатерина --------------------------

//  Презентация 6. Слайд 8. !!!HTML код под коментарием!!! -----------------------

//  !!! HTML код под коментарием !!!

// 1. Зная структуру html, с помощью изученных методов получить (в консоль):
// head
console.log(document.head);
// body
console.log(document.body);
// все дочерние элементы body и вывести их в консоль.
console.log(document.body.children);  
// первый div и все его дочерние узлы
console.log(document.body.firstElementChild);
// первый div и все его дочерние узлы - вывести в консоль все дочерние узлы, кроме первого и последнего

if (document.body.firstElementChild.children) {
  let children = document.body.firstElementChild.children;

  for (let i = 1; i < children.length - 1; ++i) {
    console.log(children[i]);
  };
};


//  Презентация 6. Слайд 16 ---------------------------
//  1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

function isParent(parent, child) {
  return child.closest(parent.tagName) === parent;
}

isParent(document.body.children[0], document.querySelector('mark'));  // false
isParent(document.querySelector('p'), document.querySelector('mark')); // true

//  2.  Получить список всех ссылок, которые не находятся внутри списка ul

let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));

//  3. Найти элемент, который находится перед и после списка ul
let z = document.querySelector('ul');
let ulPrev = z.previousElementSibling;
let ulNext = z.nextElementSibling;
console.log(ulPrev);
console.log(ulNext);

//  4. Посчитать количество элементов li в списке

let liNum = Array.from(document.querySelectorAll('body li'));
console.log(liNum.length);


//  Презентация 7. Слайд 5 ------------------------------

//  1. Найти параграф и получить его текстовое содержимое (только текст!)
let paragraph = document.querySelector('p');
console.log(paragraph.textContent);
 
//  2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)
function typeNode(node) {
  let qsNode = document.querySelector(node);
  return { type: qsNode.nodeType, name: qsNode.nodeName, children: qsNode.children.length };
}

//  до правок ---------
// function typeNode(node) {
//   let obj = {};
//   let qsNode = document.querySelector(node);
//   let childNumber = Array.from(document.querySelector(node).childNodes);

//   obj.type = qsNode.nodeType;
//   obj.name = qsNode.nodeName;
//   obj.childNum = childNumber.length;

//   return obj;
// }

//  3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
function getTextFromUl() {
  let arr = [];
  let ul = document.getElementsByTagName('li');

  for (let i = 0; i < ul.length; i++) {
    arr.push(ul[i].textContent)
  };

  return arr;
}

//  4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
let paragraph4 = document.querySelector('p');
let child = paragraph4.childNodes;

for (let i = 0; i < child.length; i++){
    if (child[i].nodeType === 3) {
        child[i].data = '-text-';
    }
};

//  Презентация 7. Слайд 11 ------------------------------
//  1. Найти в коде список ul и добавить класс “list”
let list = document.querySelector('ul');
list.classList.add('list');

//  2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let link2 = document.querySelector('span');
let link3 = link2.nextElementSibling;
link3.setAttribute('id', 'link');

//  3. На li через один (начиная с самого первого) установить класс “item”
let classLi = document.getElementsByTagName('li');

for (let i = 0; i < classLi.length; i++) {
  if (i % 2 == false) {
    classLi[i].classList.add('item');
  }
};

//  4. На все ссылки в примере установить класс “custom-link”
let classA = document.querySelectorAll('a');

for (let i = 0; i < classA.length; i++) {
  classA[i].classList.add('custom-link');
};

//  Презентация 7. Слайд 17 ------------------------------
//  1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
let ulNewLi = document.querySelector('ul');

for (let i = 0; i < 4; i++) {
  let newli = document.createElement('li');
  newli.classList.add('new-item');
  newli.textContent = 'Item' + (ulNewLi.children.length + 1);
  ulNewLi.appendChild(newli);
};

//  Презентация 7. Слайд 18 ------------------------------
// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
let strong = document.getElementsByTagName('a');

for (let i = 0; i < strong.length; i++) {
  let strongA = strong[i].closest('ul');

  if (strongA) {
    strong[i].insertAdjacentHTML('beforeend', '<strong></strong>');
  }
};

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
let myImg = document.createElement('img');
myImg.setAttribute('src', 'img/myImg.png');
myImg.setAttribute('alt', 'Text pridumala sama');

document.body.insertAdjacentElement('afterbegin', myImg);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let myMark = document.querySelector('mark');
myMark.insertAdjacentText('beforeend', ' green');
myMark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let arrLi = document.querySelector('ul').children;
let newArrLi = [];

for (let i = 0; i < arrLi.length; i++) {
  newArrLi.push(arrLi[i].textContent);
};

newArrLi.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].innerHTML = newArrLi[i];
};

console.log(newArrLi);