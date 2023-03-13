import sendRequest from "./send-request";

const BASE_URL = '/api/reviews';

export function createReview(selectedArtist, reviewData) {
    return sendRequest(`${BASE_URL}/artist/${selectedArtist}/reviews`, 'POST', reviewData)
}

export function updateReview(reviewId, reviewData) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'PUT', reviewData)
}

export function deleteReview(reviewId) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'DELETE')
}