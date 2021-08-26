export const CHANGE__NAME = 'PROFILE::CHANGE__NAME'
export const CHANGE__IS__ONLINE = 'PROFILE::CHANGE__IS__ONLINE'
export const CHANGE__IS__AUTHED = 'PROFILE::CHANGE__IS__AUTHED'

export const changeName = (name) => ({
    type: CHANGE__NAME,
    payload: {
        name
    }
})

export const chageIsAuthed = (IsAuthed) => ({
    type: CHANGE__IS__AUTHED,
    payload: {
        IsAuthed
    }
})

export const changeIsOnline = (isOnline) => ({
    type: CHANGE__IS__ONLINE,
    payload: {
        isOnline
    }
})

export const changeIsOnlineThunk = (isOnline) => {
    return (dispatch, getState) => {

        console.log(getState())
        setTimeout(() =>
            dispatch(changeIsOnline(isOnline)), 2000)

    }
}