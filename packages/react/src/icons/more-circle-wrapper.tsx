import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleIcon as RegularMoreCircleIcon } from './more-circle';
import { MoreCircleIconDuotone as MoreCircleIconDuotone } from './more-circle-duotone';
import { MoreCircleIconBold as MoreCircleIconBold } from './more-circle-bold';
import { MoreCircleIconBoldDuotone as MoreCircleIconBoldDuotone } from './more-circle-bold-duotone';
import { MoreCircleIconFill as MoreCircleIconFill } from './more-circle-fill';
import { MoreCircleIconFillDuotone as MoreCircleIconFillDuotone } from './more-circle-fill-duotone';

export interface MoreCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreCircleIcon = memo(forwardRef<SVGSVGElement, MoreCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreCircleIconFill ref={ref} {...props} />;
  if (duotone) return <MoreCircleIconDuotone ref={ref} {...props} />;
  return <RegularMoreCircleIcon ref={ref} {...props} />;
}));

MoreCircleIcon.displayName = 'MoreCircleIcon';

export { MoreCircleIcon };
