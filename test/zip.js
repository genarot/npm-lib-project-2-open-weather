// Imports
const expect = require('chai').expect;
const nock = require('nock');
const ApiService = require('./../dist/index').ApiService;

// Constants
const {API_KEY, API_URL} = require('./constants');

const responseByZipCode = require('./mocks/zip');
describe('Current weather search by zip code', () => {
    beforeEach(() => {
        // Here we make the mock
        const query = {
            zip: 94040,
            units: 'metric',
            lang: 'es',
            appid: API_KEY
        };
        nock(API_URL)
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, responseByZipCode)
    });

    // Tests
    describe('Current Tawarano Weather by its coordinates', () => {
        let api;
        before(() => {
            api = new ApiService(API_KEY, 'es', 'm');
        });
        let result;

        beforeEach(async () => {
            result = await api.searchByZipCode(94040);
        });

        it('should return the expected response', async () => {
            expect(result).to.be.deep.equal(responseByZipCode)
        });

        it('the response should has id property of type number', () => {
            expect(result.id).to.be.a('number')
        });

        it('the response should has name property of type number', () => {
            expect(result.name).to.be.a('string')
        });

        it('the response should has name property equals to Mountain View', () => {
            expect(result.name).to.be.equal('Mountain View')
        });

        it('the response should has wind property object', () => {
            expect(result).to.have.property('wind').that.is.an('object');
            expect(result.wind).to.have.property('speed').that.is.a('number');
            expect(result.wind).to.have.property('deg').that.is.a('number')
        })
    });
});
