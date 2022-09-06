const Sleep = m => new Promise(r => setTimeout(r, m));

let InputError = false;

async function send() {
  let usernameInput = document.getElementById('username');
  let passwordInput = document.getElementById('password');
    if (usernameInput.value.length <= 8) {
        InputError = true;
        usernameInput.style.borderColor = "#ff0000da";
        console.log("Username is not valid.");
    } else {console.log("Username is valid.");}
    if (passwordInput.value.length <= 8) {
        InputError = true;
        passwordInput.style.borderColor = "#ff0000da";
        console.log("Password is valid.");
    }
    if (InputError == true) {
        await Sleep(2000);
        InputError = false;
        usernameInput.style.borderColor = "#ffffff6a";
        passwordInput.style.borderColor = "#ffffff6a";
        return;
    } else {console.log("Password is not valid.");}
    grecaptcha.ready(function() {
      console.log("reCaptcha ready!");
      grecaptcha.execute('6LfUHNQhAAAAAO4bjLnPtltN6EQZEgL9rPq3dSQm').then(function(token) {
        console.log("reCaptcha executing...");
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://demo.goncermor.com:5555/", false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        console.log("Request opened...");
        let data = JSON.stringify({
          username: usernameInput.value,
          password: passwordInput.value,
          token: token
        });
        xhr.send(data);
        console.log("Sending: e" + data);
        console.log("Request sent.");





      });
    });
}