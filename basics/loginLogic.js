//Logged in from Google
//Logged in from facebook
var email = false;
var google = true;
var facebook = false;

if ((email && google) || facebook) {
  console.log('Login Success');
} else {
  console.log('login failed');
}
