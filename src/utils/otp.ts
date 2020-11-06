import { authenticator } from 'otplib';

const secret = authenticator.generateSecret();

export default function oneTimePassword() {
  const generate = () => {
    const token = authenticator.generate(secret);
    return token;
  };
  const verify = ({ token }) => {
    try {
      return authenticator.verify({ token, secret });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return { generate, verify };
}
