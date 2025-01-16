import { type ReactElement, createContext, useCallback } from 'react';
import { ControllerFieldState, ControllerRenderProps, FieldValues, Path, UseFormReturn, UseFormStateReturn } from 'react-hook-form';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { cn } from '../lib/utils/cn';

export interface FormFieldOverviewProps<T extends FieldValues> {
  label?: string;
  withError?: boolean;
  customControl?: boolean;
  formFieldDescription?: string | ((form: UseFormReturn<T>) => string);
  classNames?: {
    formItem?: string;
    formMessage?: string;
    formLabel?: string;
    formDescription?: string;
    formControl?: string;
  }
}

export interface FormFieldContextProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
}

interface FormFieldWrapperProps<T extends FieldValues> extends FormFieldOverviewProps<T> {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: (props: FormFieldContextProps<T>) => ReactElement;
}

const FormFieldContext = createContext({});

export const FormFieldWrapper = <T extends FieldValues>(props: FormFieldWrapperProps<T>): JSX.Element => {
  const { form, name, children, label, withError = true, customControl = false, formFieldDescription, classNames } = props;

  let description: string = '';

  if (typeof formFieldDescription === 'function') {
    description = formFieldDescription(form);
  } else {
    description = formFieldDescription || '';
  }

  const renderFormField = useCallback(() => (
    <FormField
      control={form.control}
      name={name}
      render={(renderProps: FormFieldContextProps<T>) => (
        <FormItem className={cn('w-full', classNames?.formItem)}>
          {label && (
            <FormLabel className={classNames?.formLabel}>
              {label}
            </FormLabel>
          )}
          {customControl ? (
            children?.(renderProps)
          ) : (
            <FormControl className={classNames?.formControl}>
              {children?.(renderProps)}
            </FormControl>
          )}
          {withError && <FormMessage className={cn('text-rose-600', classNames?.formMessage)} />}
          {formFieldDescription && (
            <FormDescription className={cn('text-left flex flex-col', classNames?.formDescription)}>
              {description.split('\n').map((p, index) => {
                return (
                  <span key={p + index}>{p}</span>
                );
              })}
            </FormDescription>
          )}
        </FormItem>
      )}
    />
  ), [children, customControl, form.control, formFieldDescription, label, name, withError, classNames, description]);

  return (
    <FormFieldContext.Consumer>
      {renderFormField}
    </FormFieldContext.Consumer>
  );
};
