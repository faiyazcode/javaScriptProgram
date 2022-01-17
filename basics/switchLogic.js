//Create an application for the following role
//admin - get full access
//subadmin - get access to create or delete course
//testprep - get access to create/ delete tests
//users - get access to consume content

var user = 'admin';
switch (user) {
  case 'admin':
    console.log('You will get full access');
    break;
  case 'subadmin':
    console.log('get access to create or delete course');
    break;
  case 'testprep':
    console.log('get access to create or delete tests');
    break;
  case 'users':
    console.log('get access to consume content');
    break;

  default:
    console.log('Trial user');
    break;
}
