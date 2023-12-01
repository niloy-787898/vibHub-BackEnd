// Example implementation of deductCoinsFromUser utility function
const User = require("../models/userModel");

const deductCoinsFromUser = async (userId, coinsToDeduct) => {
  try {
    // Fetch the user by ID
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Deduct coins from the user's account
    user.earnedCoins -= coinsToDeduct;

    // Save the updated user document
    await user.save();

    return coinsToDeduct;
  } catch (error) {
    throw new Error(`Error deducting coins: ${error.message}`);
  }
};

module.exports = {
  deductCoinsFromUser,
};
