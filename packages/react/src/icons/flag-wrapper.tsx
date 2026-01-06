import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlagIcon as RegularFlagIcon } from './flag';
import { FlagIconDuotone as FlagIconDuotone } from './flag-duotone';
import { FlagIconBold as FlagIconBold } from './flag-bold';
import { FlagIconBoldDuotone as FlagIconBoldDuotone } from './flag-bold-duotone';
import { FlagIconFill as FlagIconFill } from './flag-fill';
import { FlagIconFillDuotone as FlagIconFillDuotone } from './flag-fill-duotone';

export interface FlagIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlagIcon = memo(forwardRef<SVGSVGElement, FlagIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlagIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlagIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlagIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlagIconFill ref={ref} {...props} />;
  if (duotone) return <FlagIconDuotone ref={ref} {...props} />;
  return <RegularFlagIcon ref={ref} {...props} />;
}));

FlagIcon.displayName = 'FlagIcon';

export { FlagIcon };
