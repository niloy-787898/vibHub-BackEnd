const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    shippingInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      other: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
    },
    paymentInfo: {
      razorpayOrderId: {
        type: String,
        // required: true,
      },
      razorpayPaymentId: {
        type: String,
        // required: true,
      },
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Color",
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    coinsEarned: {
      type: Number,
      default: 10, // Assuming 10 coins per order
    },
    status: {
      type: String,
      default: "ordered",
      enum: ["ordered", "progress", "delivered", "canceled"],
    },
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalPriceAfterDiscount: {
      type: Number,
      required: true,
    },
    month: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);

// products: [
//   {
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//     },
//     count: Number,
//     color: String,
//   },
// ],
// paymentIntent: {
//   id: String,
//   method: String,
//   amount: Number,
//   status: String,
//   created: {
//     type: Date,
//     default: Date.now,
//   },
//   currency: String,
// },
// orderStatus: {
//   type: String,
//   default: "Not Processed",
//   enum: [
//     "Not Processed",
//     "Cash On Delevary",
//     "Processing",
//     "Dispathed",
//     "Cancelled",
//     "Delivered",
//   ],
// },
// orderBy: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
// },
