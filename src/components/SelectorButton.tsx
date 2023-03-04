import React, { FormEvent, useState } from 'react';
import clsx from 'clsx';

import SimpleSelect, { SimpleSelectOptionType } from './SimpleSelect';
import Button from './Button';
 
type SelectorButtonProps<Type> = {
  name: string,
  options: SimpleSelectOptionType<Type>,
  id?: string,
  className?: string,
  onSubmit?: (value: Type) => void,
  isDisabled?: boolean,
  labels?: {
    button: string,
  }
};

const defaultLabels = {
  button: 'Go',
};

const SelectorButton = <Type extends string | number>({
  name, id, className = '', options, isDisabled = false, onSubmit: onSubmitProp = () => {}, labels: initialLabels,
}: SelectorButtonProps<Type>) => {

  const labels = { ...defaultLabels, ...initialLabels };

  const [value, setValue] = useState<Type>('' as Type);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmitProp(value);
  };

  return (
      <form
          id={id}
          className={clsx([
            'selector-button dsr-flex dsr-items-stretch w-full',
            className,
          ])}
          onSubmit={onSubmit}
      >
          <SimpleSelect
              value={value}
              onChange={setValue}
              name={name}
              options={options}
              isDisabled={isDisabled}
              isRequired
              className="dsr-rounded-r-none"
              postfixRenderer={
                  <Button
                      variant="link"
                      color="contrast"
                      className="hover:dsr-no-underline dsr-w-full dsr-h-full dsr-rounded-none dsr-text-color dsr-bg-transparent"
                      type="submit"
                      isDisabled={isDisabled}
                  >
                      {labels?.button}
                  </Button>
              }
          />
      </form>
  );

};

export default SelectorButton;