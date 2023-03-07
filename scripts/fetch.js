#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const {union} = require('lodash');
// node-fetch v3 doesnt support CommonJS require
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));
const outPath = "./src/locales";

const languages = {
  async en() {
    const entry1 = await fetch("https://en.wiktionary.org/wiki/Appendix:English_given_names")
      .then(res => res.text())
      .then(res => {
        return res.match(/<li><a.*>(\w*)<\/a> - ([\w, ]*)<\/li>/g)
          .map(li => li.replace(/<\/?li>/g, '').replace(/<\/?a[^>]*>/g, ''))
          .map(line => line.split(/ - |, |\//));
          // .map(line => line.split(/ - | — /))
          // .reduce((prev, curr) => {
          //   prev[curr[0]] = curr[1].split(/, /);
          //   return prev;
          // }, {});
      });
      
    const entry2 = await fetch("https://raw.githubusercontent.com/brianary/Lingua-EN-Nickname/main/nicknames.txt")
      .then(res => res.text())
      .then(res => {
        return res.split("\n")
          .filter(Boolean)
          .map(line => line.replace(/\r/, "").split(/ |\t/))
          // .reduce((prev, curr) => {
          //   const [first, ...rest] = curr;
          //   prev[first] = rest;
          //   return prev;
          // }, {});
      })
    
    return entry1
      .concat(entry2)
      .reduce((prev, curr) => {
        const [first, ...rest] = curr;
        prev[first] = union(prev[first] || [], rest);
        return prev;
      }, {});
  }
};

(async () => {
  for (let k of Object.keys(languages)) {
    const data = await languages[k]();
    console.log(k, 'Got', Object.keys(data).length, 'entries.');
    await new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(process.cwd(), outPath, `${k}.json`),
        JSON.stringify(data),
        "utf-8",
        (err) => {
          if (err) {
            return reject(err);
          }
          resolve()
        }
      );
    });
  }
})()