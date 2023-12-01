const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: "rzp_test_KF6qN34pn5qgbG",
  key_secret: "ac90fxLxx4KuSHRycrjUSDkx",
});

const checkout = async (req, res) => {
  const options = {
    amount: 5000 * 100 + 10000, // Amount in paise
    currency: "BDT",
    receipt: "order_receipt_" + Date.now(),
  };

  try {
    const order = await instance.orders.create(options);
    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpaypaymentId } = req.body;

  res.json({
    razorpayOrderId,
    razorpaypaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification
};
