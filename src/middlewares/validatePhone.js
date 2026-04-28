const { isValidPhoneNumber } = require('libphonenumber-js');

const validatePhone = (req, res, next) => {
  const { phoneNo } = req.body;

  if (!phoneNo) {
    return res.status(400).json({ success: false, message: 'phoneNo is required' });
  }

  const normalized = String(phoneNo).startsWith('+') ? String(phoneNo) : `+${phoneNo}`;

  if (!isValidPhoneNumber(normalized)) {
    return res.status(400).json({ success: false, message: 'Invalid phone number' });
  }

  next();
};

module.exports = validatePhone;
