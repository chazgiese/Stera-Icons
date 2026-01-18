import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CirclePlaceholderIcon as RegularCirclePlaceholderIcon } from './circle-placeholder';
import { CirclePlaceholderIconDuotone as CirclePlaceholderIconDuotone } from './circle-placeholder-duotone';
import { CirclePlaceholderIconBold as CirclePlaceholderIconBold } from './circle-placeholder-bold';
import { CirclePlaceholderIconBoldDuotone as CirclePlaceholderIconBoldDuotone } from './circle-placeholder-bold-duotone';
import { CirclePlaceholderIconFill as CirclePlaceholderIconFill } from './circle-placeholder-fill';
import { CirclePlaceholderIconFillDuotone as CirclePlaceholderIconFillDuotone } from './circle-placeholder-fill-duotone';

export interface CirclePlaceholderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CirclePlaceholderIcon = memo(forwardRef<SVGSVGElement, CirclePlaceholderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CirclePlaceholderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CirclePlaceholderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CirclePlaceholderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CirclePlaceholderIconFill ref={ref} {...props} />;
  if (duotone) return <CirclePlaceholderIconDuotone ref={ref} {...props} />;
  return <RegularCirclePlaceholderIcon ref={ref} {...props} />;
}));

CirclePlaceholderIcon.displayName = 'CirclePlaceholderIcon';

export { CirclePlaceholderIcon };
