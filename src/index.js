const babelRegister = require("@babel/register");
babelRegister({
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
});

const express = require("express");
const { pipeToNodeWritable } = require("react-dom/unstable-fizz.node");

const app = express();
const render = require("./render").default;

app.get("/", (req, res) => {
  pipeToNodeWritable(render(), res).startWriting();
});

app.listen(3000);
