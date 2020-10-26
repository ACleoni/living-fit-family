
import React, { ChangeEvent, JSXElementConstructor } from "react"
import styles from './Form.module.scss';
import FormElements from "./FormElements";
import Map from '../map/Map';

export default function Form() {
    const [name, setName] = React.useState('');


    const handleChange = (event: ChangeEvent<HTMLInputElement>, type: string): void => {
        console.log(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/sendMail/')
    }

    const renderFormElements = (): JSX.Element[] => {
        return FormElements.map((element, index) => (
            <div className={`${styles.wrapInput} ${styles.validateInput}`} data-validate={element.dataValidate} key={index}>
                <label className={styles.label} htmlFor={element.name}>{element.name}</label>
                {element.type === 'input'
                    ? <input className={styles.input} type="text" name={element.name} required />
                    : <textarea className={styles.input} name={element.name} required></textarea>
                }
                <span className={styles.shadowInput}></span>
            </div>
        ))
    }

    return (
        <div className={styles.contact}>
            <div className={styles.containerContact}>
                <form className={`${styles.contactForm}`} onSubmit={(e) => { handleSubmit(e) }}>
                    <span className={styles.contactFormTitle}>
                        Get in touch
				    </span>
                    {renderFormElements()}
                    <div className={styles.containerContactFormButton}>
                        <div>
                            <p className={styles.text}>
                                Information entered above will solely be used to contact you for legitimate business purposes relating only to the enquiry you have submitted. We will not use information entered here for advertising or promotional purposes.
                            </p>
                        </div>
                        <button className={styles.contactFormButton}>
                            <span>
                                Send Message
                            </span>
                        </button>
                    </div>

                </form>
                <div style={{ height: '475px', width: '475px' }}>
                    <Map />
                    <p className={styles.text}>
                        3075 Jonquil Dr, Smyrna, GA 30080
                    </p>
                </div>

            </div>
        </div>

    )
}