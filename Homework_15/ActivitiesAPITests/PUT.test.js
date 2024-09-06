const axios = require('axios');
const { Validator } = require('jsonschema');
const activitiesJsonSchema = require('../data/activities.v2.json');

const validator = new Validator();

const url_name = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/';

describe('PUT Activitities with id validations checks', () => {
    let response, id = '5';
    test('Check of correct status code 200 after requesting valid data', async () => {
        response = await axios.put(url_name + id, {
            "id": 0,
            "title": "string",
            "dueDate": "2024-08-22T22:13:30.481Z",
            "completed": true
        },    
            {
                headers: {
                    'accept': 'text/plain; v=1.0',
                    'Content-Type': 'application/json; v=1.0'
                }  
        });
        expect(response.status).toEqual(200);
    });

    test('Check of correct JSON schema after requesting valid data', async () => {
        const result = await validator.validate(response.data, activitiesJsonSchema);
        expect(result.valid).toEqual(true);
    });
});