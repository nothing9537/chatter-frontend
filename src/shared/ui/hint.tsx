import { FC, ReactNode } from 'react';
import { cn } from '../lib/utils/cn';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

interface HintProps {
  label: string | ReactNode;
  children: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right',
  align?: 'start' | 'end' | 'center',
  className?: string;
}

export const Hint: FC<HintProps> = ({ label, children, side, align, className }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align} className="bg-black text-white border border-white/5">
          <p className={cn('font-medium text-xs w-fit', className)}>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
