import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WrenchIcon as RegularWrenchIcon } from './wrench';
import { WrenchIconDuotone as WrenchIconDuotone } from './wrench-duotone';
import { WrenchIconBold as WrenchIconBold } from './wrench-bold';
import { WrenchIconBoldDuotone as WrenchIconBoldDuotone } from './wrench-bold-duotone';
import { WrenchIconFill as WrenchIconFill } from './wrench-fill';
import { WrenchIconFillDuotone as WrenchIconFillDuotone } from './wrench-fill-duotone';

export interface WrenchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WrenchIcon = memo(forwardRef<SVGSVGElement, WrenchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WrenchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WrenchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WrenchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WrenchIconFill ref={ref} {...props} />;
  if (duotone) return <WrenchIconDuotone ref={ref} {...props} />;
  return <RegularWrenchIcon ref={ref} {...props} />;
}));

WrenchIcon.displayName = 'WrenchIcon';

export { WrenchIcon };
