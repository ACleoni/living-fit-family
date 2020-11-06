import { totp } from 'otplib';
import { trim } from './utils';

totp.options = {
  epoch: Date.now(),
  step: 30,
  window: 0,
};

const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';

export function generate() {
  return totp.generate(secret);
}

export function verify(token: string) {
  return totp.verify({ token: trim(token), secret });
}
