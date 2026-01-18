import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShuffleIcon as RegularShuffleIcon } from './shuffle';
import { ShuffleIconDuotone as ShuffleIconDuotone } from './shuffle-duotone';
import { ShuffleIconBold as ShuffleIconBold } from './shuffle-bold';
import { ShuffleIconBoldDuotone as ShuffleIconBoldDuotone } from './shuffle-bold-duotone';
import { ShuffleIconFill as ShuffleIconFill } from './shuffle-fill';
import { ShuffleIconFillDuotone as ShuffleIconFillDuotone } from './shuffle-fill-duotone';

export interface ShuffleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShuffleIcon = memo(forwardRef<SVGSVGElement, ShuffleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShuffleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShuffleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShuffleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShuffleIconFill ref={ref} {...props} />;
  if (duotone) return <ShuffleIconDuotone ref={ref} {...props} />;
  return <RegularShuffleIcon ref={ref} {...props} />;
}));

ShuffleIcon.displayName = 'ShuffleIcon';

export { ShuffleIcon };
