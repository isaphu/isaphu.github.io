function askMyName() {
  const name = prompt("What's your name?");

  if (name != null) {
    document.getElementById("my-name").innerHTML = "My name is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById("my-name").innerText
  alert(h1message + " วัตถุเมาไว")
}
