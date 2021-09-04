const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/cadastre-22205-parcelles.json')));

console.log(data.features[0]);

const filteredData = data.features.filter((f) => f.properties.contenance > 6750 && f.properties.contenance < 6850);

const displayData = filteredData.map((a) => ({
    geo: a.geometry.coordinates[0][0].reverse().join(','),
    properties: {
        ...a.properties,
    }
}));

console.log(JSON.stringify(displayData, null, 4));