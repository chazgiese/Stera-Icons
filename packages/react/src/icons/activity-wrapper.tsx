import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ActivityIcon as RegularActivityIcon } from './activity';
import { ActivityIconDuotone as ActivityIconDuotone } from './activity-duotone';
import { ActivityIconBold as ActivityIconBold } from './activity-bold';
import { ActivityIconBoldDuotone as ActivityIconBoldDuotone } from './activity-bold-duotone';
import { ActivityIconFill as ActivityIconFill } from './activity-fill';
import { ActivityIconFillDuotone as ActivityIconFillDuotone } from './activity-fill-duotone';

export interface ActivityIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ActivityIcon = memo(forwardRef<SVGSVGElement, ActivityIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ActivityIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ActivityIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ActivityIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ActivityIconFill ref={ref} {...props} />;
  if (duotone) return <ActivityIconDuotone ref={ref} {...props} />;
  return <RegularActivityIcon ref={ref} {...props} />;
}));

ActivityIcon.displayName = 'ActivityIcon';

export { ActivityIcon };
