import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleVIcon as RegularMoreCircleVIcon } from './more-circle-v';
import { MoreCircleVIconDuotone as MoreCircleVIconDuotone } from './more-circle-v-duotone';
import { MoreCircleVIconBold as MoreCircleVIconBold } from './more-circle-v-bold';
import { MoreCircleVIconBoldDuotone as MoreCircleVIconBoldDuotone } from './more-circle-v-bold-duotone';
import { MoreCircleVIconFill as MoreCircleVIconFill } from './more-circle-v-fill';
import { MoreCircleVIconFillDuotone as MoreCircleVIconFillDuotone } from './more-circle-v-fill-duotone';

export interface MoreCircleVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreCircleVIcon = memo(forwardRef<SVGSVGElement, MoreCircleVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreCircleVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreCircleVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreCircleVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreCircleVIconFill ref={ref} {...props} />;
  if (duotone) return <MoreCircleVIconDuotone ref={ref} {...props} />;
  return <RegularMoreCircleVIcon ref={ref} {...props} />;
}));

MoreCircleVIcon.displayName = 'MoreCircleVIcon';

export { MoreCircleVIcon };
