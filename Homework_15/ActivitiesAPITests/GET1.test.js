const axios = require('axios');
const { Validator } = require('jsonschema');
const activitiesJsonSchema = require('../data/activities.v1.json');

const validator = new Validator();

const url_name = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

describe('GET Activitities validations checks', () => {
    let response;
    test('Check of correct status code 200 after requesting valid data', async () => {
        response = await axios.get(url_name, {
                headers: {
                    'accept': 'text/plain; v=1.0'
                }  
        });
        expect(response.status).toEqual(200);
    });

    test('Check of correct JSON schema after requesting valid data', async () => {
        const result = await validator.validate(response.data, activitiesJsonSchema);
        expect(result.valid).toEqual(true);
    });
});