import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicroscopeIcon as RegularMicroscopeIcon } from './microscope';
import { MicroscopeIconDuotone as MicroscopeIconDuotone } from './microscope-duotone';
import { MicroscopeIconBold as MicroscopeIconBold } from './microscope-bold';
import { MicroscopeIconBoldDuotone as MicroscopeIconBoldDuotone } from './microscope-bold-duotone';
import { MicroscopeIconFill as MicroscopeIconFill } from './microscope-fill';
import { MicroscopeIconFillDuotone as MicroscopeIconFillDuotone } from './microscope-fill-duotone';

export interface MicroscopeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MicroscopeIcon = memo(forwardRef<SVGSVGElement, MicroscopeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicroscopeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MicroscopeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MicroscopeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MicroscopeIconFill ref={ref} {...props} />;
  if (duotone) return <MicroscopeIconDuotone ref={ref} {...props} />;
  return <RegularMicroscopeIcon ref={ref} {...props} />;
}));

MicroscopeIcon.displayName = 'MicroscopeIcon';

export { MicroscopeIcon };
