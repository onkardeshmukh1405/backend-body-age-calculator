const { parsePhoneNumber } = require('libphonenumber-js/max');

const validatePhone = (req, res, next) => {
  const { phoneNo } = req.body;

  if (!phoneNo) {
    return res.status(400).json({ success: false, message: 'phoneNo is required' });
  }

  try {
    const normalized = String(phoneNo).startsWith('+') ? String(phoneNo) : `+${phoneNo}`;
    const parsed = parsePhoneNumber(normalized);
    if (!parsed.isValid()) {
      return res.status(400).json({ success: false, message: 'Invalid phone number' });
    }
  } catch {
    return res.status(400).json({ success: false, message: 'Invalid phone number' });
  }

  next();
};

module.exports = validatePhone;
