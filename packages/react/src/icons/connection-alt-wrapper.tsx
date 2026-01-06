import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ConnectionAltIcon as RegularConnectionAltIcon } from './connection-alt';
import { ConnectionAltIconDuotone as ConnectionAltIconDuotone } from './connection-alt-duotone';
import { ConnectionAltIconBold as ConnectionAltIconBold } from './connection-alt-bold';
import { ConnectionAltIconBoldDuotone as ConnectionAltIconBoldDuotone } from './connection-alt-bold-duotone';
import { ConnectionAltIconFill as ConnectionAltIconFill } from './connection-alt-fill';
import { ConnectionAltIconFillDuotone as ConnectionAltIconFillDuotone } from './connection-alt-fill-duotone';

export interface ConnectionAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ConnectionAltIcon = memo(forwardRef<SVGSVGElement, ConnectionAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ConnectionAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ConnectionAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ConnectionAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ConnectionAltIconFill ref={ref} {...props} />;
  if (duotone) return <ConnectionAltIconDuotone ref={ref} {...props} />;
  return <RegularConnectionAltIcon ref={ref} {...props} />;
}));

ConnectionAltIcon.displayName = 'ConnectionAltIcon';

export { ConnectionAltIcon };
