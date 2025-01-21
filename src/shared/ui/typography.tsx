import { cloneElement, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils/cn';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface TypographyProps<T extends TypographyVariant> extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: T;
  className?: string;
}

export const Typography = <T extends TypographyVariant>({ children, variant, className, ...props }: TypographyProps<T>) => {
  let typography: JSX.Element;

  switch (variant) {
    case 'h1':
      typography = (
        <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
          {children}
        </h1>
      );
      break;
    case 'h2':
      typography = (
        <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>
          {children}
        </h2>
      );
      break;
    case 'h3':
      typography = (
        <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
          {children}
        </h3>
      );
      break;
    case 'h4':
      typography = (
        <h3 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
          {children}
        </h3>
      );
      break;
    case 'p':
      typography = (
        <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
          {children}
        </p>
      );
      break;
    default:
      typography = (
        <span className={cn(className)}>
          {children}
        </span>
      );
  }

  const typographyWithProps = cloneElement(typography, props);

  return (
    typographyWithProps
  );
};
