'user strict';

const fs = require('fs');
const {join} = require('path');

const loadsqlQueries = async (folderName) => {
    const filepath = join(process.cwd(), 'data' , folderName);
    const files = await fs.readdir(filepath);
    const sqlfiles = await files.filter(f => f.endsWith('.sql'));
    const quires = {};

    for(const sqlfile of sqlfiles){
        const query = await fs.readFileSync(join(filepath , sqlfile),{encoding : 'UTF-8'});
        quires[sqlfile.replace('.sql','')] = query
    }

    return quires;
}

module.exports = {
    loadsqlQueries
}
