import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FastForwardIcon as RegularFastForwardIcon } from './fast-forward';
import { FastForwardIconDuotone as FastForwardIconDuotone } from './fast-forward-duotone';
import { FastForwardIconBold as FastForwardIconBold } from './fast-forward-bold';
import { FastForwardIconBoldDuotone as FastForwardIconBoldDuotone } from './fast-forward-bold-duotone';
import { FastForwardIconFill as FastForwardIconFill } from './fast-forward-fill';
import { FastForwardIconFillDuotone as FastForwardIconFillDuotone } from './fast-forward-fill-duotone';

export interface FastForwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FastForwardIcon = memo(forwardRef<SVGSVGElement, FastForwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FastForwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FastForwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FastForwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FastForwardIconFill ref={ref} {...props} />;
  if (duotone) return <FastForwardIconDuotone ref={ref} {...props} />;
  return <RegularFastForwardIcon ref={ref} {...props} />;
}));

FastForwardIcon.displayName = 'FastForwardIcon';

export { FastForwardIcon };
