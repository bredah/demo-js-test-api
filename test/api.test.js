require('dotenv').config();
import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';

use(chaiHttp);

const baseUrl = process.env.API_URL;
const apiVersion = 'v2';

describe('path: /pet', () => {
  let currentPetId;

  it('get all pets with status available', async () => {
    let response = await request(getUrl()).get('/pet/findByStatus').query({
      status: 'available',
    });
    expect(response).to.have.status(200);
    expect(response).to.be.json;
  });

  it('add a new pet', async () => {
    let response = await request(getUrl())
      .post('/pet')
      .send({
        'id': 0,
        'category': {
          'id': 0,
          'name': 'string',
        },
        'name': 'fish',
        'photoUrls': ['string'],
        'tags': [
          {
            'id': 0,
            'name': 'string',
          },
        ],
        'status': 'available',
      })
      .set('api_key', 'special-key');

    expect(response).to.have.status(200);
    expect(response).to.be.json;
    currentPetId = response.body.id;
  });

  it('update an existing pet', async () => {
    let response = await request(getUrl())
      .put(`/pet`)
      .send({
        'id': currentPetId,
        'status': 'sold',
      })
      .set('api_key', 'special-key');
    expect(response).to.have.status(200);
    expect(response.body.id).to.equal(currentPetId);
  });

  it('remove an existing pet', async () => {
    let response = await request(getUrl())
      .delete(`/pet/${currentPetId}`)
      .set('api_key', 'special-key');
    expect(response).to.have.status(200);
  });
});

function getUrl() {
  return `${baseUrl}/${apiVersion}`;
}
