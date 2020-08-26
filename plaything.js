function gen() {
  var adjec = ["böser", "mutiger", "dummer", "starker", "netter?", "mächtiger", "hilfsbereiter"];
  var monst = ["Goblin", "Zombie", "Soldat", "Zahnarztpraktikant"]
  const random = Math.floor(Math.random() * adjec.length);
  const random2 = Math.floor(Math.random() * monst.length);
  var monster = adjec[random] + " " + monst[random2];
  console.log("Ein " + monster +" läuft dir über den weg!");
  document.getElementById("enemyn").innerHTML = monster;
  var helth = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  var maxhelth = helth;
  document.getElementById("enemyh").innerHTML = helth;
  alert("Ein " + monster +" läuft dir über den weg!");

  var health = Math.floor(Math.random() * (30 - 15 + 1)) + 10;
  var maxhealth = health;
  document.getElementById("uhealth").innerHTML = health
  var atk = 2;
  document.getElementById("uattacc").innerHTML = atk;

  alert("Obere Anzeigen vom ersten Block sind deine Leben und darunter Attacke.")
  alert("Der untere Block ist der Name des Gegners und seine Leben.")

}


function attack() {
  alert("You attacked the enemy!");
  var helth = document.getElementById("enemyh").textContent;
  var helth = Number(helth) - 2 ;
  var helth = Number(helth);
  document.getElementById("enemyh").innerHTML = helth;
  alert("Enemy fights back!")
  var uhealth = document.getElementById("uhealth").textContent;
  var uhealth = Number(uhealth) - 1;
  var uhealth = Number(uhealth);
  document.getElementById("uhealth").innerHTML = uhealth;
  if (helth < 0) {
    alert("You won! Press Generate Villain to play again!");
  }
  if (uhealth < 0) {
    alert("You lost! Press Generate Villain to play again!");
  }
}

function shield() {
  alert("You generated 2 Health!");
  var uhealth = document.getElementById("uhealth").textContent;
  var uhealth = Number(uhealth) + 2;
  var uhealth = Number(uhealth);
  document.getElementById("uhealth").innerHTML = uhealth;
  alert("Enemy punched you!");
  var uhealth = document.getElementById("uhealth").textContent;
  var uhealth = Number(uhealth) - 1;
  var uhealth = Number(uhealth);
  document.getElementById("uhealth").innerHTML = uhealth;
  if (helth < 0) {
    alert("You won! Press Generate Villain to play again!");
  }
  if (uhealth < 0) {
    alert("You lost! Press Generate Villain to play again!");
  }
}
