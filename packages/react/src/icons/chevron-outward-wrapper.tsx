import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronOutwardIcon as RegularChevronOutwardIcon } from './chevron-outward';
import { ChevronOutwardIconDuotone as ChevronOutwardIconDuotone } from './chevron-outward-duotone';
import { ChevronOutwardIconBold as ChevronOutwardIconBold } from './chevron-outward-bold';
import { ChevronOutwardIconBoldDuotone as ChevronOutwardIconBoldDuotone } from './chevron-outward-bold-duotone';
import { ChevronOutwardIconFill as ChevronOutwardIconFill } from './chevron-outward-fill';
import { ChevronOutwardIconFillDuotone as ChevronOutwardIconFillDuotone } from './chevron-outward-fill-duotone';

export interface ChevronOutwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronOutwardIcon = memo(forwardRef<SVGSVGElement, ChevronOutwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronOutwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronOutwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronOutwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronOutwardIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronOutwardIconDuotone ref={ref} {...props} />;
  return <RegularChevronOutwardIcon ref={ref} {...props} />;
}));

ChevronOutwardIcon.displayName = 'ChevronOutwardIcon';

export { ChevronOutwardIcon };
