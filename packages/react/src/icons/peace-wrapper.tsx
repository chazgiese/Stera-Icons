import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PeaceIcon as RegularPeaceIcon } from './peace';
import { PeaceIconDuotone as PeaceIconDuotone } from './peace-duotone';
import { PeaceIconBold as PeaceIconBold } from './peace-bold';
import { PeaceIconBoldDuotone as PeaceIconBoldDuotone } from './peace-bold-duotone';
import { PeaceIconFill as PeaceIconFill } from './peace-fill';
import { PeaceIconFillDuotone as PeaceIconFillDuotone } from './peace-fill-duotone';

export interface PeaceIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PeaceIcon = memo(forwardRef<SVGSVGElement, PeaceIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PeaceIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PeaceIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PeaceIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PeaceIconFill ref={ref} {...props} />;
  if (duotone) return <PeaceIconDuotone ref={ref} {...props} />;
  return <RegularPeaceIcon ref={ref} {...props} />;
}));

PeaceIcon.displayName = 'PeaceIcon';

export { PeaceIcon };
