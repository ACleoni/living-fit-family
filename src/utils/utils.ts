import { Session } from 'next-auth/client';

export function isAdmin(session: Session) {
  if (session) {
    return session.groups.includes('Administrators');
  }
  return false;
}

