import { totp } from 'otplib';

const secret = process.env.TOTP_SECRET;

export default function oneTimePassword() {
  const generate = () => {
    const token = totp.generate(secret);
    return token;
  };
  const verify = ({ token }) => {
    try {
      return totp.verify({ token, secret });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return { generate, verify };
}
