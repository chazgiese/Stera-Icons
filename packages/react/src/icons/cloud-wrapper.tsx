import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudIcon as RegularCloudIcon } from './cloud';
import { CloudIconDuotone as CloudIconDuotone } from './cloud-duotone';
import { CloudIconBold as CloudIconBold } from './cloud-bold';
import { CloudIconBoldDuotone as CloudIconBoldDuotone } from './cloud-bold-duotone';
import { CloudIconFill as CloudIconFill } from './cloud-fill';
import { CloudIconFillDuotone as CloudIconFillDuotone } from './cloud-fill-duotone';

export interface CloudIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CloudIcon = memo(forwardRef<SVGSVGElement, CloudIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CloudIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CloudIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CloudIconFill ref={ref} {...props} />;
  if (duotone) return <CloudIconDuotone ref={ref} {...props} />;
  return <RegularCloudIcon ref={ref} {...props} />;
}));

CloudIcon.displayName = 'CloudIcon';

export { CloudIcon };
