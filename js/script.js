let menu = document.querySelectorAll(".menu-item"),
    class_m = document.getElementsByClassName('menu')[0];
console.log(class_m);

menu.forEach((element,a,b) => {
   // class_m.removeChild(element);
 console.log(element);
});
class_m.insertBefore(menu[2], menu[1]);
let textt = document.createTextNode('ПЯтый пункт');
let new_node = document.createElement('li');

new_node.classList.add('menu-item');
new_node.appendChild(textt);
class_m.appendChild(new_node);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";
let tit = document.getElementById('title'); 
tit.textContent = " Мы продаем только оригинальную технику Андроид";

let adv = document.getElementsByClassName('adv')[0];console.log(adv);
adv.parentNode.removeChild(adv);
let quest = prompt('Как вы относитесь к технике на Андроид','Нет иного');
let eee =  document.getElementById('prompt'); 
eee.textContent = quest;
//class_m.appendChild(menu[1]);
//class_m.removeChild(menu[2]);