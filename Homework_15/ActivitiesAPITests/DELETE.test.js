const axios = require('axios');

const url_name = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/';

describe('DELETE Activitities with id validations checks', () => {
    let response, id = '3';
    test('Check of correct status code 200 after requesting valid data', async () => {
        response = await axios.delete(url_name + id,
            {
                headers: {
                    'accept': '*/*'
                }  
        });
        expect(response.status).toEqual(200);
    });
});