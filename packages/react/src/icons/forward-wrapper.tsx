import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ForwardIcon as RegularForwardIcon } from './forward';
import { ForwardIconDuotone as ForwardIconDuotone } from './forward-duotone';
import { ForwardIconBold as ForwardIconBold } from './forward-bold';
import { ForwardIconBoldDuotone as ForwardIconBoldDuotone } from './forward-bold-duotone';
import { ForwardIconFill as ForwardIconFill } from './forward-fill';
import { ForwardIconFillDuotone as ForwardIconFillDuotone } from './forward-fill-duotone';

export interface ForwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ForwardIcon = memo(forwardRef<SVGSVGElement, ForwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ForwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ForwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ForwardIconFill ref={ref} {...props} />;
  if (duotone) return <ForwardIconDuotone ref={ref} {...props} />;
  return <RegularForwardIcon ref={ref} {...props} />;
}));

ForwardIcon.displayName = 'ForwardIcon';

export { ForwardIcon };
