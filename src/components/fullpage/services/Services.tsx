import React from 'react';
import styles from './Services.module.scss'


export default function Services() {
    return (

        <ul className={styles.card_list}>
            <li className={styles.card}>
                <a className={styles.card_image} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg)' }}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
                </a>
                <a className={styles.card_description} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
                    <h2>Psychopomp</h2>
                    <p>Japanese Breakfast</p>
                </a>
            </li>
            <li className={styles.card}>
                <a className={styles.card_image} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg)' }}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
                </a>
                <a className={styles.card_description} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
                    <h2>Psychopomp</h2>
                    <p>Japanese Breakfast</p>
                </a>
            </li>
            <li className={styles.card}>
                <a className={styles.card_image} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg)' }}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
                </a>
                <a className={styles.card_description} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
                    <h2>Psychopomp</h2>
                    <p>Japanese Breakfast</p>
                </a>
            </li>
            <li className={styles.card}>
                <a className={styles.card_image} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg)' }}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
                </a>
                <a className={styles.card_description} href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
                    <h2>Psychopomp</h2>
                    <p>Japanese Breakfast</p>
                </a>
            </li>
        </ul>
    );
}