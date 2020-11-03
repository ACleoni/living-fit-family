import { totp } from 'otplib';

const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';

module.exports = () => {
  function generate() {
    return totp.generate(secret);
  }

  function verify(token: string) {
    return totp.verify({ token, secret });
  }
  return { verify, generate };
};
