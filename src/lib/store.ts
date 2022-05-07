import { writable, derived } from 'svelte/store'

export const isAuthenticated = writable(false)
export const user = writable({})
export const popupOpen = writable(false)
export const error = writable()

export const reviews = writable([])

export const user_reviews = derived([reviews, user], ([$reviews, $user]) => {
  let reviews_of_logged_in = []

  if ($user && $user.email) {
    reviews_of_logged_in = $reviews.filter((review) => review.user === $review.email)
  }

  return reviews_of_logged_in
})
