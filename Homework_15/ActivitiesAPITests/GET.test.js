const axios = require('axios');
const { Validator } = require('jsonschema');
const activitiesJsonSchema = require('../data/activities.v1.json');


const validator = new Validator();

describe('GET Activitities validations checks', () => {
    let response;
    test('Check of correct status code 200 after requesting valid data', async () => {
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
                headers: {
                    'accept': 'text/plainaccept: text/plain; v=1.0'
                }  
        });
        console.log(response);
        expect(response.status).toEqual(200);
    });

    test('Check of correct JSON schema after requesting valid data', async () => {
        const result = await validator.validate(response.data, activitiesJsonSchema);
        console.log(result);
        expect(result.valid).toEqual(true);
    });
});