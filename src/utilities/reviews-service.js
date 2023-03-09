import * as reviewsAPI from './reviews-api'

export async function createReview(reviewData) {
return reviewsAPI.createReview(reviewData)
}

export async function updateReview(reviewId, reviewData) {
    return reviewsAPI.updateReview(reviewId, reviewData)
}

export async function deleteReview(reviewId) {
    return reviewsAPI.deleteReview(reviewId)
}