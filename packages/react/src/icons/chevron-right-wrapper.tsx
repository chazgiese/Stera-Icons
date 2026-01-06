import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronRightIcon as RegularChevronRightIcon } from './chevron-right';
import { ChevronRightIconDuotone as ChevronRightIconDuotone } from './chevron-right-duotone';
import { ChevronRightIconBold as ChevronRightIconBold } from './chevron-right-bold';
import { ChevronRightIconBoldDuotone as ChevronRightIconBoldDuotone } from './chevron-right-bold-duotone';
import { ChevronRightIconFill as ChevronRightIconFill } from './chevron-right-fill';
import { ChevronRightIconFillDuotone as ChevronRightIconFillDuotone } from './chevron-right-fill-duotone';

export interface ChevronRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronRightIcon = memo(forwardRef<SVGSVGElement, ChevronRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronRightIcon ref={ref} {...props} />;
}));

ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronRightIcon };
