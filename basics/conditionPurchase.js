//Users is only allowed to make purchase when he is
//logged in
//email verified
//card info - valid
//if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log('You are allowed to make purchase, Hurrah !');
} else {
  console.log('Sorry please make your KYC first');
}
