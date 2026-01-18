import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RewindIcon as RegularRewindIcon } from './rewind';
import { RewindIconDuotone as RewindIconDuotone } from './rewind-duotone';
import { RewindIconBold as RewindIconBold } from './rewind-bold';
import { RewindIconBoldDuotone as RewindIconBoldDuotone } from './rewind-bold-duotone';
import { RewindIconFill as RewindIconFill } from './rewind-fill';
import { RewindIconFillDuotone as RewindIconFillDuotone } from './rewind-fill-duotone';

export interface RewindIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RewindIcon = memo(forwardRef<SVGSVGElement, RewindIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RewindIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RewindIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RewindIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RewindIconFill ref={ref} {...props} />;
  if (duotone) return <RewindIconDuotone ref={ref} {...props} />;
  return <RegularRewindIcon ref={ref} {...props} />;
}));

RewindIcon.displayName = 'RewindIcon';

export { RewindIcon };
