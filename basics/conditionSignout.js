//Show user a signout button if he is authenticated
//other wise show him option to Login/Signup

var authenticated = false;
//case 1
// if (authenticated) {
//   console.log('Show signout button');
// } else {
//   console.log('Show login option');
// }

//case 2

authenticated ? console.log('Login In') : console.log('Logout');
