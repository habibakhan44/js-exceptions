// (function (){
//     let counter =0;
//     const decrement = () =>{
//         counter --;
//         updateCounter();
//     };
//     const increment =() =>{
//         counter ++;
//         updateCounter();

//     };
//     const updateCounter=() =>{
//         document.getElementById("counter").innerHTML= counter;
//     };

//     document.getElementById("increment").addEventListener("click",increment);
//     document.getElementById("decrement").addEventListener("click",decrement);

// })();

// console.log(document.querySelector('h1'));
// console.log(document.childNodes[1].childNodes.length);
// console.log(document.querySelector('h1').nodeName);
// console.log(document.querySelector('h1').nodeType);
// console.log(document.querySelector('h1').childNodes[1].childNodes[0].nodeValue);

// let img = (document.getElementById('img'));
// let target = img.setAttribute('width','200px');
// console.log(img);


// const container = document.getElementById('container');
// const para = document.getElementById('para');
// const elm = document.createElement('h2');
// elm.innerHTML = "Hello World!";
// elm.style.color = 'Green'


// container.insertBefore(elm,para);
// container.removeChild(elm);

// console.log(window.location.replace);

// console.log(window.location.reload);
// console.log(window.location.reload);
// console.log(window.location.reload);

// console.log(document.referrer);
// console.log(window.open);
// console.log(windowSpecs = "'faq.html', 'faq', 'width=420,height=380,left=200,top=100'");

// function greetWorld() {
//     try {
//       var greeting = "Hello world!";
//       alert(greeting);
//     } catch (err) {
//       alert(err);
//     }
//   }

// function greetWorld() {
//     var greeting = "Hello world!";
//     alert(greeting);
// }



// function greetWorld() {
//     try {
//         var greeting = "Hello world!";
//         alert(greeting);
//     }
//     catch (err) {
//         alert(err);
//     }
// }


function checkPassword() {
    try {
      var pass = document.getElementById("f1").value;
      if (pass.length < 8) {
        throw "Please enter at least 8 characters.";
      }
      if (pass.indexOf(" ") !== -1) {
        throw "No spaces in the password, please.";
      }
      var numberSomewhere = false;
      for (var i = 0; i < pass.length; i++) {
        if (isNaN(pass(i, i + 1)) === false) {
          numberSomewhere = true;
          break;
        }
      }
      if (numberSomewhere === false) {
        throw "Include at least 1 number.";
      }
    } catch (err) {
      alert(err);
    }
  }
  