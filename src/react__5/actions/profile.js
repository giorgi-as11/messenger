export const CHANGE__NAME = 'PROFILE::CHANGE__NAME'
export const CHANGE__IS__ONLINE = 'PROFILE::CHANGE__IS__ONLINE'

export const changeName = (name) => ({
    type: CHANGE__NAME,
    payload: {
        name
    }
})


export const changeIsOnline = (isOnline) => ({
    type: CHANGE__IS__ONLINE,
    payload: {
        isOnline
    }
})