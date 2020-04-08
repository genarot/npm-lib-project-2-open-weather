import { APIResponse, Coord } from "../interfaces";
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * @description Here we set the queries language
     * @param lang {string}
     */
    setLanguage(lang: string): void;
    /**
     * @description Here we set the temperature unit
     * @param units {string}
     */
    setUnits(units: string): void;
    /**
     * @description Get the current weather searching by name
     * @param name {string} Place name
     * @param countryCode {string} Country code ej. us
     */
    searchByName(name: string, countryCode?: string): Promise<APIResponse>;
    /**
     * @param localization {Coord}
     * @description If you provide any coordinate it will Nagarote Central Park by default
     */
    searchByGeoLocalization(localization: Coord): Promise<APIResponse>;
    /**
     *
     * @param zip {string}
     * @param country {?string}
     */
    searchByZipCode(zip: string, country?: string): Promise<APIResponse>;
}
