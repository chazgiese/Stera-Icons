import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronDownIcon as RegularChevronDownIcon } from './chevron-down';
import { ChevronDownIconDuotone as ChevronDownIconDuotone } from './chevron-down-duotone';
import { ChevronDownIconBold as ChevronDownIconBold } from './chevron-down-bold';
import { ChevronDownIconBoldDuotone as ChevronDownIconBoldDuotone } from './chevron-down-bold-duotone';
import { ChevronDownIconFill as ChevronDownIconFill } from './chevron-down-fill';
import { ChevronDownIconFillDuotone as ChevronDownIconFillDuotone } from './chevron-down-fill-duotone';

export interface ChevronDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronDownIcon = memo(forwardRef<SVGSVGElement, ChevronDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronDownIcon ref={ref} {...props} />;
}));

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
