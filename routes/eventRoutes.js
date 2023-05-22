'use strict';

const express = require ('express');
const eventContoller = require('../controllers/eventContoller');
const router = express.Router();

const {getEvents} = eventContoller;

router.get('/events' , getEvents);

module.exports ={
    routes:router
}
