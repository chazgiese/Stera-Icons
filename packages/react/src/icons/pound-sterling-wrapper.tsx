import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PoundSterlingIcon as RegularPoundSterlingIcon } from './pound-sterling';
import { PoundSterlingIconDuotone as PoundSterlingIconDuotone } from './pound-sterling-duotone';
import { PoundSterlingIconBold as PoundSterlingIconBold } from './pound-sterling-bold';
import { PoundSterlingIconBoldDuotone as PoundSterlingIconBoldDuotone } from './pound-sterling-bold-duotone';
import { PoundSterlingIconFill as PoundSterlingIconFill } from './pound-sterling-fill';
import { PoundSterlingIconFillDuotone as PoundSterlingIconFillDuotone } from './pound-sterling-fill-duotone';

export interface PoundSterlingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PoundSterlingIcon = memo(forwardRef<SVGSVGElement, PoundSterlingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PoundSterlingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PoundSterlingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PoundSterlingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PoundSterlingIconFill ref={ref} {...props} />;
  if (duotone) return <PoundSterlingIconDuotone ref={ref} {...props} />;
  return <RegularPoundSterlingIcon ref={ref} {...props} />;
}));

PoundSterlingIcon.displayName = 'PoundSterlingIcon';

export { PoundSterlingIcon };
