import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronUpIcon as RegularChevronUpIcon } from './chevron-up';
import { ChevronUpIconDuotone as ChevronUpIconDuotone } from './chevron-up-duotone';
import { ChevronUpIconBold as ChevronUpIconBold } from './chevron-up-bold';
import { ChevronUpIconBoldDuotone as ChevronUpIconBoldDuotone } from './chevron-up-bold-duotone';
import { ChevronUpIconFill as ChevronUpIconFill } from './chevron-up-fill';
import { ChevronUpIconFillDuotone as ChevronUpIconFillDuotone } from './chevron-up-fill-duotone';

export interface ChevronUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronUpIcon = memo(forwardRef<SVGSVGElement, ChevronUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronUpIcon ref={ref} {...props} />;
}));

ChevronUpIcon.displayName = 'ChevronUpIcon';

export { ChevronUpIcon };
