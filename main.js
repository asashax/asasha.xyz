const express = require("express");
const server = express();

//main
server.all("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//images
//background
server.all("/images/background/1.gif", (req, res) => {
  res.sendFile(__dirname + "/images/background/1.gif");
});

server.all("/images/background/2.gif", (req, res) => {
  res.sendFile(__dirname + "/images/background/2.gif");
});

server.all("/images/background/3.gif", (req, res) => {
  res.sendFile(__dirname + "/images/background/3.gif");
});

server.all("/images/background/4.gif", (req, res) => {
  res.sendFile(__dirname + "/images/background/4.gif");
});

//pfp
server.all("/images/pfp/21.jpg", (req, res) => {
  res.sendFile(__dirname + "/images/pfp/21.jpg");
});

//icon
server.all("/images/pinkHeart.png", (req, res) => {
  res.sendFile(__dirname + "/images/pinkHeart.png");
});

//socials
server.all("/images/socials/youtube.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/youtube.png");
});

server.all("/images/socials/twitter.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/twitter.png");
});

server.all("/images/socials/spotify.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/spotify.png");
});

server.all("/images/socials/soundcloud.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/soundcloud.png");
});

server.all("/images/socials/tiktok.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/tiktok.png");
});

server.all("/images/socials/lastfm.png", (req, res) => {
  res.sendFile(__dirname + "/images/socials/lastfm.png");
});

//music
//mp3's
server.all("/music/bgm.mp3", (req, res) => {
  res.sendFile(__dirname + "/music/bgm.mp3");
});

//sounds
server.all("/sounds/enter.mp3", (req, res) => {
  res.sendFile(__dirname + "/sounds/enter.mp3");
});

//images
server.all("/images/player/muted.png", (req, res) => {
  res.sendFile(__dirname + "/images/player/muted.png");
});

server.all("/images/player/unmuted.png", (req, res) => {
  res.sendFile(__dirname + "/images/player/unmuted.png");
});

//scripts
server.all("/main.js", (req, res) => {
  res.sendFile(__dirname + "/main.js");
});

server.all("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/css/style.css");
});

//server
server.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});