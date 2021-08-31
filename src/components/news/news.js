import React from "react"
import NEWS__STATUS from "../reducers/news"
import { fetchByAxios, fetchNews, setNewsList } from "../actions/new"
import axiosPromise from "../axios/axios"
import { API_URL } from "../constants/constants"
import { useDispatch, useSelector } from 'react-redux'
export const News = () => {
    // const [isLoading, setIsloading] = React.useState(false)
    // const [isError, setIsError] = React.useState(false)
    // const [info, setInfo] = React.useState([])

    // const loadData = () => {
    //     fetch(API_URL)
    //         .then((response) => {

    //             if (!response.ok || response.status !== 200) {
    //                 throw Error(`something went wrong`)
    //             }
    //             console.log(`succes`, { response })
    //             return response.json()
    //         })
    //         .then((responseJson) => {
    //             setInfo(responseJson)
    //             console.log(`secont Then`, { responseJson })
    //         })
    //         .catch((err) => {
    //             console.error(`Error`, err)
    //         })
    // }

    // const loadDataWithAsync = async () => {
    //     setIsloading(true)
    //     setIsError(false)
    //     try {
    //         const response = await fetch(API_URL)
    //         const responseJson = await response.json()
    //         setInfo(responseJson)
    //         setIsloading(false)
    //     } catch (err) {
    //         console.error(`console error`, err)
    //         setIsError(true)
    //     }
    // }

    // const loadDataByAxios = () => {
    //     axiosPromise.get(API_URL)
    //         .then(({ data }) => {
    //             console.log(`axios render`, { data })
    //             setInfo(data)
    //         })

    //         .catch(err => console.error(err))
    // }

    // const loadDataByAxiosWitchAsync = async () => {
    //     setIsloading(true)
    //     setIsError(false)
    //     try {
    //         const { data } = await axiosPromise.get(API_URL)

    //         setInfo(data)
    //         setIsloading(false)
    //     } catch (err) {
    //         console.error(err)
    //         setIsloading(false)
    //         setIsError(true)
    //     }
    // }

    const { list, status } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())

    const loadDataByAxios = () => dispatch(fetchByAxios())

    const clearData = () => dispatch(setNewsList([]))



    // dispatch(fetchNews())

    if (status === NEWS__STATUS.loading) {
        return <p>Loading....</p>
    }
    console.log(status)
    return (
        <div>

            <p>News page</p>

            <button onClick={loadData}>load Data</button>
            <button onClick={clearData}>clear Data</button>
            <button onClick={loadDataByAxios}>load Data By Axios</button>

            {status === NEWS__STATUS.error ? (
                <p className="bordered" style={{ color: 'red' }}>ERROR!!!</p>
            ) : (
                <ol className="bordered">
                    {list.map((newsItem) => (
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </ol>
            )}


        </div>
    )
}