const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };
  
  module.exports = { validateEmail, validateMobileNumber };