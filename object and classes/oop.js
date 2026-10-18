const user = {
    username: "usaid",
    loginCount: 8,
    SignIn: true,

    getUserDetails: function(){
        // console.log("Got user detail from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//Constructor

function User(username, loginCount, isLoggedIn) {
    this.user = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("usaid", 11, false);
// console.log(userOne.constructor);
// console.log(userTwo);
console.log(userOne instanceof Date);
console.log(userTwo instanceof User);