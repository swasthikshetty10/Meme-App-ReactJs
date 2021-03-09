"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.auth = exports.provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('firebase/auth');

var app = _firebase["default"].initializeApp({
  apiKey: "AIzaSyCLCG_UAGA6XdIoL9uzL2bubNGpSXKuRT0",
  authDomain: "memeapp-532d6.firebaseapp.com",
  projectId: "memeapp-532d6",
  storageBucket: "memeapp-532d6.appspot.com",
  messagingSenderId: "554433461592",
  appId: "1:554433461592:web:7ca051047b646b51a3392d",
  measurementId: "G-E4MVR2Q9M9"
});

var db = app.firestore();
var provider = new _firebase["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var auth = app.auth();
exports.auth = auth;
var _default = db;
exports["default"] = _default;