import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicIcon as RegularMicIcon } from './mic';
import { MicIconDuotone as MicIconDuotone } from './mic-duotone';
import { MicIconBold as MicIconBold } from './mic-bold';
import { MicIconBoldDuotone as MicIconBoldDuotone } from './mic-bold-duotone';
import { MicIconFill as MicIconFill } from './mic-fill';
import { MicIconFillDuotone as MicIconFillDuotone } from './mic-fill-duotone';

export interface MicIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MicIcon = memo(forwardRef<SVGSVGElement, MicIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MicIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MicIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MicIconFill ref={ref} {...props} />;
  if (duotone) return <MicIconDuotone ref={ref} {...props} />;
  return <RegularMicIcon ref={ref} {...props} />;
}));

MicIcon.displayName = 'MicIcon';

export { MicIcon };
