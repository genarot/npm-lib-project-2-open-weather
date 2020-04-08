// Imports
const expect = require('chai').expect;
const nock = require('nock');
const ApiService = require('./../dist/index').ApiService;

// Constants
const {API_KEY, API_URL} = require('./constants');

const responseByGeoLoc = require('./mocks/localization');
describe('Current weather search by geo localization', () => {
    beforeEach(() => {
        // Here we make the mock
        const query = {
            lon: 139.01,
            lat: 35.02,
            units: 'metric',
            lang: 'es',
            appid: API_KEY
        };
        nock(API_URL)
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, responseByGeoLoc)
    });

    // Tests
    describe('Current Tawarano Weather by its coordinates', () => {
        let api;
        before(() => {
            api = new ApiService(API_KEY, 'es', 'm');
        });
        let result;

        beforeEach(async () => {
            result = await api.searchByGeoLocalization({lat: 35.02, lon: 139.01});
        });

        it('should return the expected response', async () => {
            expect(result).to.be.deep.equal(responseByGeoLoc)
        });

        it('the response should has id property of type number', () => {
            expect(result.id).to.be.a('number')
        });

        it('the response should has name property of type number', () => {
            expect(result.name).to.be.a('string')
        });

        it('the response should has name property equals to Tawarano', () => {
            expect(result.name).to.be.equal('Tawarano')
        });

        it('the response should has wind property object', () => {
            expect(result).to.have.property('wind').that.is.an('object');
            expect(result.wind).to.have.property('speed').that.is.a('number');
            expect(result.wind).to.have.property('deg').that.is.a('number')
        })
    });
});
