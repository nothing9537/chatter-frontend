import { ReactNode, ElementType } from 'react';
import { ClassValue } from 'clsx';

import { cn } from '../lib/utils/cn';

type StackDirection = 'vertical' | 'horizontal';

interface StackBaseProps {
  direction?: StackDirection;
  className?: ClassValue;
  children: ReactNode;
  spacing?: number;
}

type StackProps<T extends ElementType = 'div'> = StackBaseProps & {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Stack = <T extends ElementType = 'div'>({
  as,
  direction = 'horizontal',
  className,
  children,
  spacing = 2,
  ...rest
}: StackProps<T>) => {
  const Component = as || 'div';
  const directionClassName = direction === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <Component className={cn('flex', directionClassName, className, `gap-${spacing}`)} {...rest}>
      {children}
    </Component>
  );
};
