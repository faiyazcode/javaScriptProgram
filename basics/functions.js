/* 
Define a function that can answer the role of users.
A user can be on following roles:
admin - with all access
subdomain - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.
Input: getuserRole(name, role)
*/

var getuserRole = function (name, role) {
  switch (role) {
    case 'admin':
      return `${name} is admin with all access`;
      break; //this is not necessary
    case 'subadmin':
      return `${name} is sub-admin with access to create and delete courses`;
      break;
    case 'testprep':
      return `${name} is test prep with access to create and delete courses`;
      break;
    case 'user':
      return `${name} is a user to consume content`;
      break;
    default:
      return `${name} is a trial user`;
      break;
  }
};

// getuserRole('Faiyaz', 'testprep');
console.log(getuserRole('Faiyaz', 'testprep'));

var getRole = getuserRole('Rohan', 'user');
