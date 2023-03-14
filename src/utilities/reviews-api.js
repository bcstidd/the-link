import sendRequest from "./send-request";

const BASE_URL = '/api/reviews';

export function getAll(selectedArtist) {
    return sendRequest(`${BASE_URL}/${selectedArtist}`);
}

export function addReview (selectedArtist, reviewForm) {
    return sendRequest(`${BASE_URL}/${selectedArtist}/reviews`, 'POST', reviewForm);
}


