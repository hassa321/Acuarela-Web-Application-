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
loginForm.addEventListener('submit', userLoginValidate);

function userLoginValidate(e) {
  e.preventDefault();
  var email = document.getElementById('userLoginEmail').value;
  var password = document.getElementById('userLoginPassword').value;
  if(email === 'user' && password == 'user') {
    alert('User logged in');
    window.location = 'index.html'
    return false;
  } else if( email === 'admin' && password === 'admin') {
    alert('Admin logged in');
    window.location = 'index.html'
    return false;
  } else {
    alert('Username/password is incorrect')
    return false;
  }
}
