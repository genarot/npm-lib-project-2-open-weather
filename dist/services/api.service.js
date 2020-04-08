"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_service_1 = __importDefault(require("./axios.service"));
const constants_1 = require("../constants/constants");
const lang_codes_1 = require("../constants/lang-codes");
class ApiService {
    constructor(APIKEY, lang = 'es', units = 'metrics') {
        this.APIKEY = APIKEY;
        this.setLanguage(lang);
        this.setUnits(units);
    }
    /**
     * @description Here we set the queries language
     * @param lang {string}
     */
    setLanguage(lang) {
        if (lang_codes_1.LANGCODES.find(l => l.code === lang)) {
            this.lang = `&lang=${lang}`;
        }
        else {
            this.lang = '&lang=es';
        }
    }
    /**
     * @description Here we set the temperature unit
     * @param units {string}
     */
    setUnits(units) {
        this.units = '';
        if (units === 'm' || units === 'metric') {
            this.units = '&units=metric';
        }
    }
    // To search by name
    /**
     * @description Get the current weather searching by name
     * @param name {string} Place name
     * @param countryCode {string} Country code ej. us
     */
    searchByName(name, countryCode = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
            let filter = '';
            if (countryCode) {
                filter = `q=${name},${countryCode}`;
            }
            else {
                filter = `q=${name}`;
            }
            // API call
            const url = `${constants_1.CURRENT}${filter}${params}`;
            const result = yield axios_service_1.default.get(url);
            return result.data;
        });
    }
    // To search by coordinates
    /**
     * @param localization {Coord}
     * @description If you provide any coordinate it will Nagarote Central Park by default
     */
    searchByGeoLocalization(localization) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
            let filter = '';
            if (!localization === undefined || localization === null) {
                filter = `lat=12.265549&lon=-86.5802491`;
                console.warn('You are using Nagarote Central Park coordinate because you dit not provide any correct one!');
            }
            else {
                filter = `lat=${localization.lat}&lon=${localization.lon}`;
            }
            // API call
            const url = `${constants_1.CURRENT}${filter}${params}`;
            const result = yield axios_service_1.default.get(url);
            return result.data;
        });
    }
    // To search by zip code
    /**
     *
     * @param zip {string}
     * @param country {?string}
     */
    searchByZipCode(zip, country) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
            let filter = '';
            if (!country) {
                filter = `zip=${zip}`;
            }
            else {
                filter = `zip=${zip},${country}`;
            }
            // API call
            const url = `${constants_1.CURRENT}${filter}${params}`;
            const result = yield axios_service_1.default.get(url);
            return result.data;
        });
    }
}
exports.ApiService = ApiService;
