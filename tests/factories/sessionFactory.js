const KG = require("keygrip");
const keys = require("../../config/dev");
const Buffer = require("safe-buffer").Buffer;

module.exports = (user) => {
  const sessionObject = {
    passport: {
      user: user._id.toString(),
    }
  };
  const session = Buffer.from(JSON.stringify(sessionObject)).toString(
    "base64"
  );
  
  const keygrip = new KG([keys.cookieKey]);
  const sig = keygrip.sign("session=" + session);
  return {
    session,
    sig,
  }
};
