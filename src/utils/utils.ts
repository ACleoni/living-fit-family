import { Session } from 'next-auth/client';

export function trim(str) {
  str = str.replace(/^\s+/, '');
  for (var i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return str;
}

export function handleError(err) {
  console.log('HERE');
}

export function isAdmin(session: Session) {
  if (session) {
    return session.groups.includes('Administrators');
  }
  return false;
}
