import { Loader as LucideLoader } from 'lucide-react';
import { ComponentProps, FC } from 'react';

import { cn } from '../lib/utils/cn';

export const Loader: FC<ComponentProps<typeof LucideLoader>> = ({ className, ...props }) => {
  return (
    <LucideLoader className={cn('animate-spin size-4', className)} {...props} />
  );
};
