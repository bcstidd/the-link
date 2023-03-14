import sendRequest from './send-request';
const BASE_URL = '/api/artists'

export function getAllArtists() {
    return sendRequest(`${BASE_URL}`);
}

export function getOneArtist (selectedArtist) {
    return sendRequest(`${BASE_URL}/${selectedArtist}`)
}