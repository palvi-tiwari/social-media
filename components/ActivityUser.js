module.exports = async (req, res) => {
  console.log(req.payload, "req.payload");
  console.log(req.body, req, "req.payload");
  try {
    // const signUpDetails = new signUp({
    //   firstName: req.body.firstName,
    //   lastName: req.payload.lastName,
    // });
    // const signUpDetailsSave = await signUpDetails.save();
    // return res.status(200).json({
    //   success: true,
    //   message: "signup",
    //   signUpDetails: signUpDetailsSave,
    //   token: token,
    // });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Activity not created...",
    });
  }
};
