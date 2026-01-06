import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicOffIcon as RegularMicOffIcon } from './mic-off';
import { MicOffIconDuotone as MicOffIconDuotone } from './mic-off-duotone';
import { MicOffIconBold as MicOffIconBold } from './mic-off-bold';
import { MicOffIconBoldDuotone as MicOffIconBoldDuotone } from './mic-off-bold-duotone';
import { MicOffIconFill as MicOffIconFill } from './mic-off-fill';
import { MicOffIconFillDuotone as MicOffIconFillDuotone } from './mic-off-fill-duotone';

export interface MicOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MicOffIcon = memo(forwardRef<SVGSVGElement, MicOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MicOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MicOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MicOffIconFill ref={ref} {...props} />;
  if (duotone) return <MicOffIconDuotone ref={ref} {...props} />;
  return <RegularMicOffIcon ref={ref} {...props} />;
}));

MicOffIcon.displayName = 'MicOffIcon';

export { MicOffIcon };
