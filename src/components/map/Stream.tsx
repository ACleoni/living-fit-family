import React, { Component } from 'react';
import styles from './Stream.module.scss';

// const AnyReactComponent = ({ lat, lng, text }) => <img height='25px' src={marker} />;

interface MyProps {
  center: object;
  zoom: number;
}

interface MyState {
  value: string;
}

class Stream extends Component {
  static defaultProps = {
    center: {
      lat: 33.87803,
      lng: -84.50432,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={styles.macbook}>
        <div className={styles.screen}>
          <div
            className={styles.viewport}
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dq0fvempx/image/upload/v1605365482/oie_transparent_1_st3df4.png')",
            }}
          ></div>
        </div>
        <div className={styles.base}></div>
        <div className={styles.notch}></div>
      </div>
    );
  }
}

export default Stream;
