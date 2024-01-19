const razorpay = require('razorpay');
const {   RAZORPAY_ID, RAZORPAY_SECRET} = require('./../keys');

const instance = new razorpay({
    key_id: RAZORPAY_ID,
    key_secret: RAZORPAY_SECRET
});

module.exports = instance;