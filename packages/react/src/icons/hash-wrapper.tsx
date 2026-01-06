import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashIcon as RegularHashIcon } from './hash';
import { HashIconDuotone as HashIconDuotone } from './hash-duotone';
import { HashIconBold as HashIconBold } from './hash-bold';
import { HashIconBoldDuotone as HashIconBoldDuotone } from './hash-bold-duotone';
import { HashIconFill as HashIconFill } from './hash-fill';
import { HashIconFillDuotone as HashIconFillDuotone } from './hash-fill-duotone';

export interface HashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HashIcon = memo(forwardRef<SVGSVGElement, HashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HashIconFill ref={ref} {...props} />;
  if (duotone) return <HashIconDuotone ref={ref} {...props} />;
  return <RegularHashIcon ref={ref} {...props} />;
}));

HashIcon.displayName = 'HashIcon';

export { HashIcon };
