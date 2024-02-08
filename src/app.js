/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "My", "Your", "The"];
  let subject = [
    "alien",
    "cat",
    "dog",
    "truck",
    "grandpa",
    "CIA agent",
    "bystander",
    "sister",
    "band-mate"
  ];
  let action = [
    "took my",
    "ate my",
    "thrashed my",
    "flushed my",
    "lost my",
    "stole my",
    "threw my"
  ];
  let posession = ["car", "guitar", "homework", "hand", "keys"];
  let where = [
    "in my backyard",
    "in my garage",
    "on the street",
    "in the park"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * posession.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    posession[possIndx] +
    " " +
    where[wheIndx]
  );
};
