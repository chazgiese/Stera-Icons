import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ActivityRegular } from './ActivityRegular';
import { ActivityRegularDuotone } from './ActivityRegularDuotone';
import { ActivityBold } from './ActivityBold';
import { ActivityBoldDuotone } from './ActivityBoldDuotone';
import { ActivityFill } from './ActivityFill';
import { ActivityFillDuotone } from './ActivityFillDuotone';

export interface ActivityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Activity with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ActivityRegular } from 'stera-icons/ActivityRegular';
 */
const Activity = memo(forwardRef<SVGSVGElement, ActivityProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ActivityBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ActivityBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ActivityFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ActivityFill ref={ref} {...rest} />;
  if (duotone) return <ActivityRegularDuotone ref={ref} {...rest} />;
  return <ActivityRegular ref={ref} {...rest} />;
}));

Activity.displayName = 'Activity';

export { Activity };
