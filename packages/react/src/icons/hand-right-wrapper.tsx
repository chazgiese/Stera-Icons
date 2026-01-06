import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandRightIcon as RegularHandRightIcon } from './hand-right';
import { HandRightIconDuotone as HandRightIconDuotone } from './hand-right-duotone';
import { HandRightIconBold as HandRightIconBold } from './hand-right-bold';
import { HandRightIconBoldDuotone as HandRightIconBoldDuotone } from './hand-right-bold-duotone';
import { HandRightIconFill as HandRightIconFill } from './hand-right-fill';
import { HandRightIconFillDuotone as HandRightIconFillDuotone } from './hand-right-fill-duotone';

export interface HandRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HandRightIcon = memo(forwardRef<SVGSVGElement, HandRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HandRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HandRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HandRightIconFill ref={ref} {...props} />;
  if (duotone) return <HandRightIconDuotone ref={ref} {...props} />;
  return <RegularHandRightIcon ref={ref} {...props} />;
}));

HandRightIcon.displayName = 'HandRightIcon';

export { HandRightIcon };
