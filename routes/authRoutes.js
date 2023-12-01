const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgetPasswordToken,
  resetPasswordToken,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  craeteOrder,
  getMyOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getAllOrders,
  getSingleOrders,
  applyCoupon,
  getAllOrder,
  getOrderByUserId,
  updateOrderStatus,
  getOrders,
  updateSingleOrders,

  
} = require("../controller/userCntrl");
const {
  checkout,
  paymentVerification
} = require("../controller/paymentCtrl")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/regester", createUser);
router.post("/forget-password-token", forgetPasswordToken);
router.put("/reset-password/:token", resetPasswordToken);

router.put("/update-password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/create-order", authMiddleware, craeteOrder);

router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/payment-verification", authMiddleware, paymentVerification);


router.get("/all-user", getAllUser);
router.get("/refresh-token", handleRefreshToken);
router.get("/logout", logoutUser);
router.get("/all-wishlist", authMiddleware, getWishlist);
router.get("/all-cart", authMiddleware, getUserCart);
router.get("/get-orders", authMiddleware, getMyOrder);
router.get("/all-orders", authMiddleware, isAdmin, getAllOrders);

router.get("/geta-order/:id", authMiddleware, isAdmin, getSingleOrders);
router.put("/updatea-order/:id", authMiddleware, isAdmin, updateSingleOrders);
router.get("/:id", authMiddleware, isAdmin, getSingleUser);

router.delete(
  "/update-product-quantity-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);

router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id", deleteUser);

router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

// router.post("/cart/coupon", authMiddleware, applyCoupon);
// router.get("/get-orders", authMiddleware, getOrders);
// router.get("/all-order", authMiddleware, isAdmin, getAllOrder);

// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrder);
// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrder);



// router.put(
//   "/order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );


module.exports = router;
