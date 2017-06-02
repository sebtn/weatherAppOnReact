import axios from 'axios'
import { openWeatherMapUrl } from '../../apiConfig.js'

'use strict'
export const getTemp = (location) => {
	let encodedLocation = encodeURIComponent(location)
	let requestUrl = `${openWeatherMapUrl}&q=${encodedLocation}&units=metric`

	return axios.get(requestUrl).then( function (res) {
		if (res.data.cod && res.data.message) {
			throw new Error(res.data.message)
		} else {
			return res.data.main.temp
		}
	}, function (res) {
		throw new Error(res.data.message)
	})

}