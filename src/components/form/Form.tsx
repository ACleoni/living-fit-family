
import React, { ChangeEvent, JSXElementConstructor } from "react"
import styles from './Form.module.scss';
import FormElements from "./FormElements";

export default function Form() {
    const [name, setName] = React.useState('');


    const handleChange = (event: ChangeEvent<HTMLInputElement>, type: string): void => {
        console.log(event.target.value)
    }

    const renderFormElements = (): JSX.Element[] => {
        return FormElements.map(element => (
            <div className={`${styles.wrapInput}`} data-validate={element.dataValidate}>
                {element.type === 'input'
                    ? <input className={styles.input} type="text" name={element.name} placeholder={element.placeHolder} />
                    : <textarea className={styles.input} name={element.name} placeholder={element.placeHolder}></textarea>
                }
                <span className={styles.shadowInput}></span>
            </div>
        ))
    }

    return (
        <div className={styles.contact}>
            <div className={styles.containerContact}>
                <form className={`${styles.contactForm}`}>
                    <span className={styles.contactFormTitle}>
                        Send us a message
				    </span>
                    {renderFormElements()}
                    <div className="container-contact1-form-btn">
                        <button className="contact1-form-btn">
                            <span>
                                Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}