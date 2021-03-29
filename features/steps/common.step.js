require('dotenv').config();

import { Given, Then, When } from '@cucumber/cucumber';
import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';

use(chaiHttp);

let currentApiVersion;
let currentResponse;
let currentPath;
let currentQueryParams = {};

Given('I using the api version {int}', function (apiVersion) {
  currentApiVersion = 'v' + apiVersion;
});

Given('I set the path {string}', function (path) {
  currentPath = path;
});

Given('add a query parameter {string} with value {string}', function (param, value) {
  currentQueryParams[param] = value;
});

When('I send GET HTTP request', async function () {
  currentResponse = await request(getUrl()).get(currentPath).query(currentQueryParams);
});

When('I send POST HTTP request', async function (data) {
  let requestData = {
    'id': 0,
    'category': {
      'id': 0,
      'name': 'string',
    },
    'photoUrls': ['string'],
    'tags': [
      {
        'id': 0,
        'name': 'string',
      },
    ],
    ...data.rowsHash(),
  };

  currentResponse = await request(getUrl())
    .post(currentPath)
    .send(requestData)
    .set('api_key', 'special-key');
});

When('I send PUT HTTP request', async function (data) {
  let requestData = {
    ...data.rowsHash(),
  };

  if (requestData.id == '') {
    requestData.id = currentResponse.body.id;
  }

  currentResponse = await request(getUrl())
    .put(currentPath)
    .send(requestData)
    .set('api_key', 'special-key');
});

When('I send DELETE HTTP request', async function (data) {
  let requestData = {
    ...data.rowsHash(),
  };

  if (requestData.id == '') {
    requestData.id = currentResponse.body.id;
  }

  currentResponse = await request(getUrl())
    .delete(`${currentPath}/${requestData.id}`)
    .set('api_key', 'special-key');
});

Then('I receive valid HTTP response code {int}', function (statusCode) {
  expect(currentResponse).to.have.status(statusCode);
});

Then('the response body is in JSON format', function () {
  expect(currentResponse).to.be.json;
});

function getUrl() {
  return `${process.env.API_URL}/${currentApiVersion}`;
}
