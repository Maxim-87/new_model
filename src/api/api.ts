import { instance } from './instance';

export const api = {
    async getApi() {
        return instance.get('/search?country=United+Kingdom');
    }
};

export type UniversitiesType = {
    "alpha_two_code": string
    "domains": Array<string>
    "country": string
    "state-province": null
    "web_pages": Array<string>
    "name": string
}

