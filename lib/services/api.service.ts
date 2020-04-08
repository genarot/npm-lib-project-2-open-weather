import axios from './axios.service'
import {CURRENT} from "../constants/constants";
import {LANGCODES} from "../constants/lang-codes";
import {APIResponse, Coord} from "../interfaces";

export class ApiService {
    private APIKEY: string;
    private lang: string | undefined;
    private units: string | undefined;

    constructor(APIKEY: string, lang: string = 'es', units: string = 'metrics') {
        this.APIKEY = APIKEY;
        this.setLanguage(lang);
        this.setUnits(units)
    }

    /**
     * @description Here we set the queries language
     * @param lang {string}
     */
    setLanguage(lang: string) {
        if (LANGCODES.find(l => l.code === lang)) {
            this.lang = `&lang=${lang}`
        } else {
            this.lang = '&lang=es'
        }
    }

    /**
     * @description Here we set the temperature unit
     * @param units {string}
     */
    setUnits(units: string) {
        this.units = '';
        if (units === 'm' || units === 'metric') {
            this.units = '&units=metric'
        }
    }

    // To search by name
    /**
     * @description Get the current weather searching by name
     * @param name {string} Place name
     * @param countryCode {string} Country code ej. us
     */
    async searchByName(name: string, countryCode: string = '') {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (countryCode) {
            filter = `q=${name},${countryCode}`
        } else {
            filter = `q=${name}`
        }

        // API call
        const url = `${CURRENT}${filter}${params}`;
        const result = await axios.get<APIResponse>(url);
        return result.data;
    }

    // To search by coordinates
    /**
     * @param localization {Coord}
     * @description If you provide any coordinate it will Nagarote Central Park by default
     */
    async searchByGeoLocalization(localization: Coord) {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (!localization === undefined || localization === null) {
            filter = `lat=12.265549&lon=-86.5802491`;
            console.warn('You are using Nagarote Central Park coordinate because you dit not provide any correct one!')
        } else {
            filter = `lat=${localization.lat}&lon=${localization.lon}`
        }

        // API call
        const url = `${CURRENT}${filter}${params}`;
        const result = await axios.get<APIResponse>(url);
        return result.data;
    }

    // To search by zip code
    /**
     *
     * @param zip {string}
     * @param country {?string}
     */
    async searchByZipCode(zip: string, country?: string) {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (!country) {
            filter = `zip=${zip}`
        } else {
            filter = `zip=${zip},${country}`
        }

        // API call
        const url = `${CURRENT}${filter}${params}`;
        const result = await axios.get<APIResponse>(url);
        return result.data;
    }
}
