require('dotenv').config()
const cron = require('node-cron');

const movider = require('./movider')
const line = require('./alert/line')

cron.schedule('0 * * * *', async () => {
    console.log('active')
    const { amount } = await movider.getBalance()
    if (amount < 50) {
        line.sendNotify(`เครดิต SMS ใกล้หมดแล้ว จำนวนที่เหลือ $${amount.toFixed(2)}`)
    }
})

console.log('starting cron')
