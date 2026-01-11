import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TelescopeIcon as RegularTelescopeIcon } from './telescope';
import { TelescopeIconDuotone as TelescopeIconDuotone } from './telescope-duotone';
import { TelescopeIconBold as TelescopeIconBold } from './telescope-bold';
import { TelescopeIconBoldDuotone as TelescopeIconBoldDuotone } from './telescope-bold-duotone';
import { TelescopeIconFill as TelescopeIconFill } from './telescope-fill';
import { TelescopeIconFillDuotone as TelescopeIconFillDuotone } from './telescope-fill-duotone';

export interface TelescopeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TelescopeIcon = memo(forwardRef<SVGSVGElement, TelescopeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TelescopeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TelescopeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TelescopeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TelescopeIconFill ref={ref} {...props} />;
  if (duotone) return <TelescopeIconDuotone ref={ref} {...props} />;
  return <RegularTelescopeIcon ref={ref} {...props} />;
}));

TelescopeIcon.displayName = 'TelescopeIcon';

export { TelescopeIcon };
