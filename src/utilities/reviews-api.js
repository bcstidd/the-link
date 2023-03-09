import sendRequest from "./send-request";

const BASE_URL = '/api/reviews';

export function createReview(reviewData) {
    return sendRequest(BASE_URL, 'POST', reviewData)
}

export function updateReview(reviewId, reviewData) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'PUT', reviewData)
}

export function deleteReview(reviewId) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'DELETE')
}