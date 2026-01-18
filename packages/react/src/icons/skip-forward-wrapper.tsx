import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SkipForwardIcon as RegularSkipForwardIcon } from './skip-forward';
import { SkipForwardIconDuotone as SkipForwardIconDuotone } from './skip-forward-duotone';
import { SkipForwardIconBold as SkipForwardIconBold } from './skip-forward-bold';
import { SkipForwardIconBoldDuotone as SkipForwardIconBoldDuotone } from './skip-forward-bold-duotone';
import { SkipForwardIconFill as SkipForwardIconFill } from './skip-forward-fill';
import { SkipForwardIconFillDuotone as SkipForwardIconFillDuotone } from './skip-forward-fill-duotone';

export interface SkipForwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SkipForwardIcon = memo(forwardRef<SVGSVGElement, SkipForwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SkipForwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SkipForwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SkipForwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SkipForwardIconFill ref={ref} {...props} />;
  if (duotone) return <SkipForwardIconDuotone ref={ref} {...props} />;
  return <RegularSkipForwardIcon ref={ref} {...props} />;
}));

SkipForwardIcon.displayName = 'SkipForwardIcon';

export { SkipForwardIcon };
