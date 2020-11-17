import React from 'react';
import { Session } from 'next-auth/client';
import {
  Container,
  Segment,
  Menu,
  Icon,
  Image,
  Dropdown,
  Button,
  Sticky,
  Sidebar,
  Grid,
  Header,
} from 'semantic-ui-react';
import styles from './mobile-navbar.module.scss';
import Landing from '@components/landing/Landing';

interface Props {
  session: Session;
  logo: string;
  signIn: Function;
  signOut: Function;
  handleClick: Function;
}

export default function MobileNavBar({ session, logo, signIn, signOut, handleClick }: Props) {
  const [activeItem, setActiveItem] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const toggleLockScreen = () => {
    document.body.style.overflow = visible ? 'hidden' : 'scroll';
  };

  const handleSessionClick = () => {
    return session ? signOut() : signIn('okta');
  };

  return (
    <div>
      <Sticky>
        <Menu inverted borderless>
          <Menu.Item header>
            <Image src={logo} size='small' />
          </Menu.Item>
          <Menu.Item position='right' onClick={() => handleToggle()}>
            <Icon size='big' name='bars' />
          </Menu.Item>
        </Menu>
      </Sticky>

      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='right'
          // icon='labeled'
          inverted
          onShow={() => toggleLockScreen()}
          onHide={() => toggleLockScreen()}
          vertical
          // width='thin'
          visible={visible}
        >
          <Menu.Item>About</Menu.Item>
          <Menu.Item name='search' active={activeItem === 'search'}>
            Services
          </Menu.Item>
          <Menu.Item name='add' active={activeItem === 'add'}>
            Merch
          </Menu.Item>
          <Menu.Item name='about' active={activeItem === 'about'}>
            Contact
          </Menu.Item>

          {session && (
            <Dropdown item text={session.user.name} pointing='top right'>
              <Dropdown.Menu>
                <Dropdown.Item icon='book' text='Homework' />
                <Dropdown.Item icon='settings' text='Account Settings' />
              </Dropdown.Menu>
            </Dropdown>
          )}

          <Menu.Item>
            <Button basic color='green' onClick={() => handleSessionClick()}>
              {session ? 'Sign Out' : 'Sign In'}
            </Button>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment textAlign='center' vertical padded={false}>
            <Landing />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
