import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScissorsIcon as RegularScissorsIcon } from './scissors';
import { ScissorsIconDuotone as ScissorsIconDuotone } from './scissors-duotone';
import { ScissorsIconBold as ScissorsIconBold } from './scissors-bold';
import { ScissorsIconBoldDuotone as ScissorsIconBoldDuotone } from './scissors-bold-duotone';
import { ScissorsIconFill as ScissorsIconFill } from './scissors-fill';
import { ScissorsIconFillDuotone as ScissorsIconFillDuotone } from './scissors-fill-duotone';

export interface ScissorsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScissorsIcon = memo(forwardRef<SVGSVGElement, ScissorsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScissorsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScissorsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScissorsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScissorsIconFill ref={ref} {...props} />;
  if (duotone) return <ScissorsIconDuotone ref={ref} {...props} />;
  return <RegularScissorsIcon ref={ref} {...props} />;
}));

ScissorsIcon.displayName = 'ScissorsIcon';

export { ScissorsIcon };
