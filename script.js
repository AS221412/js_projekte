let is_visible = false;


//Funktion um das Passwort scihtbar zu machen
function see() {
  let input = document.getElementById("password");
  let see = document.getElementById("see");

  if (is_visible) {
    input.type = "password";
    is_visible = false;

    see.style.color = "gray";
  } else {
    input.type = "text";
    is_visible = true;

    see.style.color = "blue";
  }
}

// Funktion überprüft die Kriterien, die das Passwort erfüllen muss
function check() {
  let input = document.getElementById("password").value;

  input = input.trim();
  
  document.getElementById("count").innerText = "Länge : " + input.length;

  if (input.length >= 5) {
    document.getElementById("check0").style.color = "green";
  } else {
    document.getElementById("check0").style.color = "red";
  }

  if (input.length < 10) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "red";
  }

  if (input.match(/[0-9]/i)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "red";
  }

  //  "i" für igonore Flag. Die groß und Kleinschreibung wird ignoriert
  if (input.match(/[^A-Za-z0-9-'']/i)){
    document.getElementById("check3").style.color = "green";
  } else{   
    document.getElementById("check3").style.color = "red";
  }

  if (input.match(' ')){
    document.getElementById("check4").style.color = "red";
  }else{
    document.getElementById("check4").style.color = "green";
  }

}
