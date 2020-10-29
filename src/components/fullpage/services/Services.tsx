import React from 'react';
import styles from './Services.module.scss'


export default function Services() {
    return (
        <section className={styles.section}>
            <h3 className={styles.section_header}>Our Services</h3>
            <p className={styles.section_lead}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&h=200" />
                    <h4 className={styles.card_header}>Nature</h4>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className={styles.card}>
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4 className={styles.card_header}>Food</h4>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className={styles.card}>
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4 className={styles.card_header}>Buildings</h4>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className={styles.card}>
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4 className={styles.card_header}>Buildings</h4>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
    );
        </section>
    );
}