const request = require("request")
const headers = {
	"Access-Control-Allow-Origins":"*"
}

exports.handler = (event, context, callback) => {
	const id = event.queryStringParameters.id
	const TRACKS_URL = 'https://api.deezer.com/search?q=ARTISTNAME&limit=15'

	request.get(TRACKS_URL, (error, response, body) =>{
		if (error) {
			return callback(null, {
				statusCode: 500,
				body: "Error at server"
			})
		}

		callback(null, {
			statusCode: 200,
			body,
			headers
		})
	})
}