import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BubbleIcon as RegularBubbleIcon } from './bubble';
import { BubbleIconDuotone as BubbleIconDuotone } from './bubble-duotone';
import { BubbleIconBold as BubbleIconBold } from './bubble-bold';
import { BubbleIconBoldDuotone as BubbleIconBoldDuotone } from './bubble-bold-duotone';
import { BubbleIconFill as BubbleIconFill } from './bubble-fill';
import { BubbleIconFillDuotone as BubbleIconFillDuotone } from './bubble-fill-duotone';

export interface BubbleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BubbleIcon = memo(forwardRef<SVGSVGElement, BubbleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BubbleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BubbleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BubbleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BubbleIconFill ref={ref} {...props} />;
  if (duotone) return <BubbleIconDuotone ref={ref} {...props} />;
  return <RegularBubbleIcon ref={ref} {...props} />;
}));

BubbleIcon.displayName = 'BubbleIcon';

export { BubbleIcon };
