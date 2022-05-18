#! /usr/bin/env node
import fetch from "node-fetch";
import yargs from "yargs";

const { argv } = yargs(process.argv);

// call to get array of sci fi objs
async function getQuotes() {
  const res = await fetch("https://sci-fi-api.netlify.app/");
  const data = await res.json();
  return data.quotes;
}

// call to get random number limited to array size
async function randomizer(arr) {
  return Math.floor(Math.random() * arr.length);
}

if (argv.one) {
  const sciFiArray = await getQuotes();
  const randomKey = await randomizer(sciFiArray);
  console.log(sciFiArray[randomKey].line);
} else {
  const sciFiArray = await getQuotes();
  console.log(sciFiArray);
}
