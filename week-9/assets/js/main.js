document.addEventListener('DOMContentLoaded', () => {
  console.log('page is loaded');
  
  const id = document.getElementsByTagName('body')[0].id;
  const navigation = document.querySelectorAll('.nav-main ul li a');

  console.log(navigation);
  console.log(id);

  for (let i = 0; i < navigation.length; i++) {
    const element = navigation[i].getAttribute('href').replace('.html', '');

    if (id === element) {
      navigation[i].classList.add('is-active');
    }
  }
 


  /*
    Add in active check to see what page a user is on
  */


});