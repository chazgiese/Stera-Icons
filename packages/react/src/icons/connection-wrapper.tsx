import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ConnectionIcon as RegularConnectionIcon } from './connection';
import { ConnectionIconDuotone as ConnectionIconDuotone } from './connection-duotone';
import { ConnectionIconBold as ConnectionIconBold } from './connection-bold';
import { ConnectionIconBoldDuotone as ConnectionIconBoldDuotone } from './connection-bold-duotone';
import { ConnectionIconFill as ConnectionIconFill } from './connection-fill';
import { ConnectionIconFillDuotone as ConnectionIconFillDuotone } from './connection-fill-duotone';

export interface ConnectionIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ConnectionIcon = memo(forwardRef<SVGSVGElement, ConnectionIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ConnectionIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ConnectionIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ConnectionIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ConnectionIconFill ref={ref} {...props} />;
  if (duotone) return <ConnectionIconDuotone ref={ref} {...props} />;
  return <RegularConnectionIcon ref={ref} {...props} />;
}));

ConnectionIcon.displayName = 'ConnectionIcon';

export { ConnectionIcon };
