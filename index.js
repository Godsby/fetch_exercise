//Step 1
// document.addEventListener('DOMContentLoaded', () => {
//
//   let button = document.querySelector('button');
//   button.addEventListener('click', () => {
//
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(parsedRes => {
//       if (!document.querySelector('img')) {
//         let body = document.querySelector('body');
//         let img = document.createElement('img');
//         img.src = parsedRes.message;
//         body.appendChild(img);
//       } else {
//         let img = document.querySelector('img');
//         img.src = parsedRes.message;
//         body.replaceChild(img);
//       }
//     });
//   });
// });
