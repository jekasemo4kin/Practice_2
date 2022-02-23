let b,c,img1,img2,img3,img_f;
let a ;  
const dlia_off_page = document.getElementsByTagName("span")[0];
b = dlia_off_page;

(function foo(){
    alert ("Ravwen in the HTML");
    img_f = document.querySelectorAll ("img"); // массив из 3-х картинок 
    console.log(img_f);                        // коллекция нодов 
    a =  parseInt(window.prompt (" here you need to write a number from one to three, otherwise there will be a second call (like recursion)"));
if ( a === 1){
    img_f[1].src="tyt2/tek1.png";
    img_f[2].src="tyt2/tek1.png";
    console.log(img_f[1], img_f[2]);
    c = document.createElement("span")
    c.innerHTML =  "<br>TerrorBlade(a) - SoulKeeper(a)";
    b.after(c);
    c.classList.add("for_terror");
} else if ( a === 2){
    img_f[0].src="tyt2/tek1.png";
    img_f[2].src="tyt2/tek1.png";
    console.log(img_f[0], img_f[2]);
    c = document.createElement("span")
    c.innerHTML =  "<br>Pudge(a) - Butcher(a)";
    b.after(c);
    c.classList.add("for_pudge");
} else if ( a === 3 ){
    img_f[0].src="tyt2/tek1.png";
    img_f[1].src="tyt2/tek1.png";
    console.log(img_f[0], img_f[1]);
    c = document.createElement("span")
    c.innerHTML =  " <br> Slark(a) - Murlock(a) Nighcrowler(a)";
    b.after(c);
    c.classList.add("for_slark");
} else { foo() }
})();
const idei2 = document.querySelector('.for_img');
const elem = document.createElement("span");
elem.innerHTML =  a ;
console.log(elem);
idei2.append(elem);  
elem.classList.add("for_elem"); 
console.log(elem);
