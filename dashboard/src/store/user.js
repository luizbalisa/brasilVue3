import { reactive } from "vue"

const state = reactive({
    currentUser: {}
})

export const setCurrentUser = (user) => {
    state.currentUser = user
}

export const setApiKey = (apiKey) => {
    const currentUser = { ...state.currentUser, apiKey }
    state.currentUser = currentUser
}

export function cleanCurrentUser() {
    state.currentUser = {}
}

export default state

