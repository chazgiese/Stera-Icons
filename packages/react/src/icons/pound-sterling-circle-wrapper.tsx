import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PoundSterlingCircleIcon as RegularPoundSterlingCircleIcon } from './pound-sterling-circle';
import { PoundSterlingCircleIconDuotone as PoundSterlingCircleIconDuotone } from './pound-sterling-circle-duotone';
import { PoundSterlingCircleIconBold as PoundSterlingCircleIconBold } from './pound-sterling-circle-bold';
import { PoundSterlingCircleIconBoldDuotone as PoundSterlingCircleIconBoldDuotone } from './pound-sterling-circle-bold-duotone';
import { PoundSterlingCircleIconFill as PoundSterlingCircleIconFill } from './pound-sterling-circle-fill';
import { PoundSterlingCircleIconFillDuotone as PoundSterlingCircleIconFillDuotone } from './pound-sterling-circle-fill-duotone';

export interface PoundSterlingCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PoundSterlingCircleIcon = memo(forwardRef<SVGSVGElement, PoundSterlingCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PoundSterlingCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PoundSterlingCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PoundSterlingCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PoundSterlingCircleIconFill ref={ref} {...props} />;
  if (duotone) return <PoundSterlingCircleIconDuotone ref={ref} {...props} />;
  return <RegularPoundSterlingCircleIcon ref={ref} {...props} />;
}));

PoundSterlingCircleIcon.displayName = 'PoundSterlingCircleIcon';

export { PoundSterlingCircleIcon };
