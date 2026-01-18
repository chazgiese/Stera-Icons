import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquarePlaceholderIcon as RegularSquarePlaceholderIcon } from './square-placeholder';
import { SquarePlaceholderIconDuotone as SquarePlaceholderIconDuotone } from './square-placeholder-duotone';
import { SquarePlaceholderIconBold as SquarePlaceholderIconBold } from './square-placeholder-bold';
import { SquarePlaceholderIconBoldDuotone as SquarePlaceholderIconBoldDuotone } from './square-placeholder-bold-duotone';
import { SquarePlaceholderIconFill as SquarePlaceholderIconFill } from './square-placeholder-fill';
import { SquarePlaceholderIconFillDuotone as SquarePlaceholderIconFillDuotone } from './square-placeholder-fill-duotone';

export interface SquarePlaceholderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SquarePlaceholderIcon = memo(forwardRef<SVGSVGElement, SquarePlaceholderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquarePlaceholderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SquarePlaceholderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SquarePlaceholderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SquarePlaceholderIconFill ref={ref} {...props} />;
  if (duotone) return <SquarePlaceholderIconDuotone ref={ref} {...props} />;
  return <RegularSquarePlaceholderIcon ref={ref} {...props} />;
}));

SquarePlaceholderIcon.displayName = 'SquarePlaceholderIcon';

export { SquarePlaceholderIcon };
