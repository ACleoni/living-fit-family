import React, { ChangeEvent, JSXElementConstructor } from 'react';
import styles from './Form.module.scss';
import FormElements from './FormElements';
import Map from '../map/Stream';

export default function Form() {
  const [name, setName] = React.useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: string): void => {
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/sendMail/');
  };

  const renderFormElements = (): JSX.Element[] => {
    return FormElements.map((element, index) => (
      <div className={`${styles.wrapInput} ${styles.validateInput}`} data-validate={element.dataValidate} key={index}>
        <label className={styles.label} htmlFor={element.name}>
          {element.name}
        </label>
        {element.type === 'input' ? (
          <input className={styles.input} type='text' name={element.name} required />
        ) : (
          <textarea className={styles.input} name={element.name} required></textarea>
        )}
        <span className={styles.shadowInput}></span>
      </div>
    ));
  };

  return (
    <div id='contact' className='uk-child-width-1-3 uk-text-center uk-margin-large-left' data-uk-grid>
      <div>
        <form>
          <fieldset className='uk-fieldset'>
            <legend className='uk-legend'>Legend</legend>

            <div className='uk-margin'>
              <input className='uk-input' type='text' placeholder='Input' />
            </div>

            <div className='uk-margin'>
              <select className='uk-select'>
                <option>Option 01</option>
                <option>Option 02</option>
              </select>
            </div>

            <div className='uk-margin'>
              <textarea className='uk-textarea' rows={5} placeholder='Textarea'></textarea>
            </div>

            <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
              <label>
                <input className='uk-radio' type='radio' name='radio2' checked /> A
              </label>
              <label>
                <input className='uk-radio' type='radio' name='radio2' /> B
              </label>
            </div>

            <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
              <label>
                <input className='uk-checkbox' type='checkbox' checked /> A
              </label>
              <label>
                <input className='uk-checkbox' type='checkbox' /> B
              </label>
            </div>

            <div className='uk-margin'>
              <input className='uk-range' type='range' value='2' min='0' max='10' step='0.1' />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
