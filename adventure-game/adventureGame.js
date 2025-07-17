const readline = require('readline-sync');
const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  
  const askVillager = readline.question("You see a villager. Do you ask if they know where you can stay? (yes/no) ");
  
  if (askVillager.toLowerCase() === "yes") {
    const askDirections = readline.question("Do you ask for directions? (yes/no) ");
    if (askDirections.toLowerCase() === "yes") {
      const path = readline.question("Do you walk south (long) or take shortcut north? (south/north) ");
      if (path.toLowerCase() === "south") {
        console.log("You enjoy a long walk south and reach the inn.");
      } else if (path.toLowerCase() === "north") {
        console.log("You take the shortcut north and quickly reach the inn.");
      } else {
        console.log("You decide to stay put and rest.");
      }
    } else {
      console.log("You wander around without directions.");
    }
  } else {
    console.log("The villager ignores you.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}
