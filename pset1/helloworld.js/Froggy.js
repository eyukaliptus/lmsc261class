const activities = ["babysit tadpoles",
"flies for lunch",
"tongue stretch",
"swimming lesson"];

let choiceFromUser = prompt("What activity?");
choiceFromUser = choiceFromUser % 4;
print(activities[choiceFromUser]);
 