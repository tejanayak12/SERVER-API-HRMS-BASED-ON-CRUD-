'use strict' 
const eventdata = require ('../data/events');

const getEvents = async (req , res , next) => {
    try {
        const events = await eventdata.getEvents();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getEvents
}

