import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullUpIcon as RegularChevronFullUpIcon } from './chevron-full-up';
import { ChevronFullUpIconDuotone as ChevronFullUpIconDuotone } from './chevron-full-up-duotone';
import { ChevronFullUpIconBold as ChevronFullUpIconBold } from './chevron-full-up-bold';
import { ChevronFullUpIconBoldDuotone as ChevronFullUpIconBoldDuotone } from './chevron-full-up-bold-duotone';
import { ChevronFullUpIconFill as ChevronFullUpIconFill } from './chevron-full-up-fill';
import { ChevronFullUpIconFillDuotone as ChevronFullUpIconFillDuotone } from './chevron-full-up-fill-duotone';

export interface ChevronFullUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullUpIcon ref={ref} {...props} />;
}));

ChevronFullUpIcon.displayName = 'ChevronFullUpIcon';

export { ChevronFullUpIcon };
