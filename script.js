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
    InputError = false;
    await Sleep(2000);
    usernameInput.style.borderColor = "#ffffff6a";
    passwordInput.style.borderColor = "#ffffff6a";
    return;
  } else {console.log("Password is not valid.");}
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://demo.goncermor.com/", false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  console.log("Request opened...");
  let data = JSON.stringify({
    username: usernameInput.value,
    password: passwordInput.value
  });
  console.log("Sending: " + data);
  xhr.send(data);
  console.log("Request sent.");
  let cookiedata = JSON.parse(xhr.response);
  console.log("Received and parsed data: " + cookiedata.data);
  const d = new Date();
  d.setTime(d.getTime() + (31*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = "data=" + cookiedata.data + ";" + expires + ";path=/";
  window.location.reload();
}