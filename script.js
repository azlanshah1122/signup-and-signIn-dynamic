// let h1 = document.querySelector('h1');
// let btnSignUp = document.querySelector('.btn-signUp');
// let btnSignIn = document.getElementById('btn-signIn');
// let nameField = document.querySelector('.user-field');
// let underLine = document.querySelector('.under-line');



// btnSignIn.addEventListener('click', () => {
//  h1.innerHTML ='signIn';
//   nameField.style.display = 'none';
//   underLine.style.transform = 'translateX(30px)';
//   // btnSignUp.style.color = 'green';


//   btnSignUp.addEventListener('click', () => {
//     h1.innerHTML ='signUp';
//      nameField.style.display = 'block';
//      underLine.style.transform = 'translateX(0px)';
//      // btnSignIn.style.color = 'gray';
    
     
//    });
  
// });
document.addEventListener('DOMContentLoaded', () => {
  let h1 = document.querySelector('h1');
  let btnSignUp = document.getElementById('btn-signUP');
  let btnSignIn = document.getElementById('btn-signIn');
  let nameField = document.querySelector('.user-field');
  let underLine = document.querySelector('.under-line');

  btnSignIn.addEventListener('click', () => {
      h1.innerHTML = 'Sign In';
      nameField.style.display = 'none';
      underLine.style.transform = 'translateX(30px)';
   btnSignUp.style = 'none';
  });

  btnSignUp.addEventListener('click', () => {
    h1.innerHTML = 'Sign Up';
    nameField.style.display = 'block';
    underLine.style.transform = 'translateX(0px)';
 
  });
 
});



