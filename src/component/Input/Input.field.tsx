import React from 'react';
import { FC, InputHTMLAttributes, memo } from 'react';
import { IconType } from 'react-icons/lib';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelContent: string;
  inputName: string;
  className?: string;
  placeholder: string;
  touched?: boolean;
  errors?: string;
  Icon?: IconType;
  iconPlace: 'left' | 'right';
}

const Input: FC<Props> = ({
  labelContent,
  inputName,
  className,
  placeholder,
  touched,
  errors,
  Icon,
  iconPlace,
  ...rest
}) => {
  const place = iconPlace === 'left' ? ' ' : ' right-0 ';
  const touch = errors && touched && ' border-red-500 ';

  return (
    <div className="h-16 ">
      <label htmlFor={inputName} className="sr-only">
        {labelContent}
      </label>
      <div className="relative mt-2">
        <input
          {...rest}
          id={inputName}
          placeholder={placeholder}
          required
          className={
            'w-full placeholder-gray-400 border-b focus:border-blue-500 focus:outline-none text-sm px-3 py-3 ' +
            className +
            touch
          }
        />
        {Icon && (
          <Icon
            className={
              'absolute w-6 h-6 text-blue-500 fill-login top-3' + place
            }
          />
        )}
      </div>
      {touched && <div className="text-red-400">{errors}</div>}
    </div>
  );
};

Input.defaultProps = {
  touched: false,
  errors: '',
  iconPlace: 'left',
};

export default memo(Input);
