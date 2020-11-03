import { totp } from 'otplib';

const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';

export function generate() {
  return totp.generate(secret);
}

export function verify(token: string) {
  return totp.verify({ token, secret });
}
