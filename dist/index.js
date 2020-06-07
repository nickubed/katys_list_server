"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let expressJwt = require('express-jwt');
let cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express_1.default();
app.use(cors);
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Katys_List Server Reached');
});
app.get('*', (req, res) => {
    res.send('404, request not found');
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`🦊You're listening to the sweet sounds of port ${process.env.PORT || 'localhost: 3000'}🦊`);
});
