import axios from 'axios'
import {URL_OPEN_WEATHER} from "../constants/constants";

export default axios.create({baseURL: URL_OPEN_WEATHER})
