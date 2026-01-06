import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashCircleIcon as RegularHashCircleIcon } from './hash-circle';
import { HashCircleIconDuotone as HashCircleIconDuotone } from './hash-circle-duotone';
import { HashCircleIconBold as HashCircleIconBold } from './hash-circle-bold';
import { HashCircleIconBoldDuotone as HashCircleIconBoldDuotone } from './hash-circle-bold-duotone';
import { HashCircleIconFill as HashCircleIconFill } from './hash-circle-fill';
import { HashCircleIconFillDuotone as HashCircleIconFillDuotone } from './hash-circle-fill-duotone';

export interface HashCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HashCircleIcon = memo(forwardRef<SVGSVGElement, HashCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HashCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HashCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HashCircleIconFill ref={ref} {...props} />;
  if (duotone) return <HashCircleIconDuotone ref={ref} {...props} />;
  return <RegularHashCircleIcon ref={ref} {...props} />;
}));

HashCircleIcon.displayName = 'HashCircleIcon';

export { HashCircleIcon };
