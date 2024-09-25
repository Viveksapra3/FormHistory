document.querySelectorAll('[role = "button"]').forEach(i=>{
  if(i.innerText === "Submit"){
      console.dir(i);
      sub = i;
  }
});
sub.setAttribute('type', 'button');
document.addEventListener('DOMContentLoaded', function() {
  sub.addEventListener('click',function(e){
    console.dir(sub);
    console.log("hello vivek console")
      e.preventDefault();
      alert("hiiiiiiii");
  });
});


// This query works fine with we submit the button with the help of JS on console but when we click the button it does'nt work.










// var formy = [];
// let forms = document.querySelector('form');
// if(forms){
//   console.log("poidhyfo");
//   forms.addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('vivek submits');
//   });
// }
// else{
//   console.log('hell form');
// }
//   // formy =[];
//   // const radioButtons = document.querySelectorAll('[role="radio"]');
//   // radioButtons.forEach(radio => {
//   //   if (radio.getAttribute('aria-checked') === 'true') {
//   //     formy.push(radio.getAttribute('data-value').toString());
//   //   }
//   // });
//   // var time = new Date().getTime().toString();
//   // chrome.storage.local.set({ [time]: formy }, function() {
//   //   console.log('Array saved with timestamp as key:', time);
//   // });




// //   const radioButtons = document.querySelectorAll('[role="radio"]');
// //   radioButtons.forEach(radio => {
// //     if (radio.getAttribute('aria-checked') === 'true') {
// //         console.log(radio.getAttribute('data-value'));
// //     }
// //   });
// // //   let g = v.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerText;
// let forms = document.querySelector('form');
// console.dir(forms);
// forms.addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('vivek submits');
//     chrome.storage.local.set({ 'vivek': 'sapra' }, function() {
//       console.log('Data saved:', fieldData);
//     });
//   });

// document.querySelectorAll('[role="radio"]').forEach(field => {
//       field.addEventListener('input', function() {
//         var fieldData = {
//           name: field.name || field.id,
//           value: field.value,
//           timestamp: new Date().toISOString()
//         };
//         chrome.storage.local.set({ [fieldData.name]: fieldData }, function() {
//           console.log('Data saved:', fieldData);
//         });
//       });
//     });

// // Select all elements with role="radio"
// let radios = document.querySelectorAll('[role="radio"]');

// // Create a new MutationObserver instance
// let observer = new MutationObserver((mutationsList) => {
//   mutationsList.forEach((mutation) => {
//     if (mutation.type === 'attributes' && mutation.attributeName === 'aria-checked') {
//       console.log(`Radio button changed: ${mutation.target.getAttribute('data-value')}`);
//     }
//   });
// });

// // Observe each radio button for attribute changes
// radios.forEach((radio) => {
//   observer.observe(radio, { attributes: true });  // Observes attribute changes
// });
