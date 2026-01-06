import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreVIcon as RegularMoreVIcon } from './more-v';
import { MoreVIconDuotone as MoreVIconDuotone } from './more-v-duotone';
import { MoreVIconBold as MoreVIconBold } from './more-v-bold';
import { MoreVIconBoldDuotone as MoreVIconBoldDuotone } from './more-v-bold-duotone';
import { MoreVIconFill as MoreVIconFill } from './more-v-fill';
import { MoreVIconFillDuotone as MoreVIconFillDuotone } from './more-v-fill-duotone';

export interface MoreVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreVIcon = memo(forwardRef<SVGSVGElement, MoreVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreVIconFill ref={ref} {...props} />;
  if (duotone) return <MoreVIconDuotone ref={ref} {...props} />;
  return <RegularMoreVIcon ref={ref} {...props} />;
}));

MoreVIcon.displayName = 'MoreVIcon';

export { MoreVIcon };
