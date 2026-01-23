import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ActivityRegular } from './ActivityRegular.js';
import { ActivityRegularDuotone } from './ActivityRegularDuotone.js';
import { ActivityBold } from './ActivityBold.js';
import { ActivityBoldDuotone } from './ActivityBoldDuotone.js';
import { ActivityFill } from './ActivityFill.js';
import { ActivityFillDuotone } from './ActivityFillDuotone.js';

export interface ActivityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Activity - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ActivityRegular } from 'stera-icons/icons/ActivityRegular';
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

// Triple export pattern (lucide-react style)
export { Activity, Activity as ActivityIcon, Activity as SiActivity };
export default Activity;
