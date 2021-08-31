import { API_URL } from '../constants/constants'
import axiosPromise from "../axios/axios"
export const SET_NEWS_LIST = "NEWS::SET_NEWS_LIST"
export const SET_IDLE_STATUS = "NEWS::SET_IDLE_STATUS"
export const SET_LOADING_STATUS = "NEWS::SET_LOADING_STATUS"
export const SET_ERROR_STATUS = "NEWS::SET_ERROR_STATUS"


export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })
export const setIdleSTatus = () => ({ type: SET_IDLE_STATUS })
export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setNewsList = (newsList) => ({
    type: SET_NEWS_LIST,
    payload: {
        newsList
    }
})

// export const fetchNews = () => (dispatch, getState) => {
//     dispatch(setLoadingStatus())

//     fetch(API_URL)
//         .then((response) => {
//             if (response.status !== 200) {
//                 throw Error(`Error suka`)
//             }
//             return response.json()
//         })
//         .then((responeJson) => {
//             dispatch(setNewsList(responeJson))
//             dispatch(setIdleSTatus())
//         })
//         .catch((err) => {
//             console.error(`action error`, err)
//             dispatch(setErrorStatus())
//         })
// }
export const fetchNews = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus())

        fetch(API_URL)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    throw Error('Something went wrong')
                }

                return response.json()
            })
            .then((responseJson) => {
                dispatch(setNewsList(responseJson))
                dispatch(setIdleSTatus())
            })
            .catch((error) => {
                console.error('error', error)

                dispatch(setErrorStatus())
            })
    }
}

export const fetchByAxios = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus())
        try {
            const { data } = await axiosPromise.get(API_URL)

            dispatch(setNewsList(data))
            dispatch(setIdleSTatus())
        } catch (err) {
            console.error(`mine Error`, err)
            dispatch(setErrorStatus())
        }
    }

}