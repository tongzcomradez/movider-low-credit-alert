const request = require('request')

exports.sendNotify = (message) => {
    console.log(message)
    try {
        const options = {
            method: 'POST',
            url: 'https://notify-api.line.me/api/notify',
            headers: {
                Authorization: `Bearer ${process.env.LINE_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            formData: {
                message,
            },
        }
        return request(options)
    } catch (error) {
        console.log('error in send message', error)
      throw error   
    }
}