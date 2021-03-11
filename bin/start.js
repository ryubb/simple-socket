#!/usr/bin/env node

"use strict";

const child_process = require("child_process");
const simpleSocketServer = require("../server");

// start yarn script
const proc = child_process.spawn("node", [simpleSocketServer]);
proc.stdout.on("data", (data) => {
  console.log(data.toString());
});
// end yarn script
