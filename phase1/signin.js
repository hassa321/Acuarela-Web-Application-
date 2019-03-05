let numUser = 0;

const users = []

class user {
  constructor(username, password, type) {
    this.username = username;
    this.password = password;
    this type = type;
    this.id = numUser;
    numUser++;
  }
}

users.push(new user('user', 'user', 1));
users.push(new user('admin', 'admin', 0));

const loginForm = document.querySelector('#userLoginForm');
loginForm.addEventListener('submit', userLoginValidation);

function userLoginValidation(e) {
  e.preventDefault();
  const email = document.querySelector('#userLoginEmail').value;
  const password = document.querySelector('userLoginPassword').value;
  if(email === 'user' && password === 'user') {
    alert('User logged in');
    locate = 'index.html'
    return false;
  } else if( email === 'admin' && password === 'admin') {
    alert('Admin logged in');
    locate = 'index.html'
    return false;
  } else {
    alert('Username and password do not match')
    return false;
  }
}
