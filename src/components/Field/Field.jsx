import getIdFromTitle from '@/utils/getIdFromTitle';
import './Field.scss';
import classNames from 'classnames';

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    type, // undefined (default) | 'email' | 'textarea'  
    placeholder,
    isRequered,
    inputMode,
  } = props;

  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label 
        className="field__label" 
        htmlFor={id}
      >
        {label} {isRequered && (
          <span className="field__required-star" aria-hidden={true}>*</span>
        )}
      </label>
      <div className="field__body">
        <Component 
          className='field__control'
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequered}
          inputMode={inputMode}
        />
      </div>
    </div>
  );
};

export default Field;