import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CupIcon as RegularCupIcon } from './cup';
import { CupIconDuotone as CupIconDuotone } from './cup-duotone';
import { CupIconBold as CupIconBold } from './cup-bold';
import { CupIconBoldDuotone as CupIconBoldDuotone } from './cup-bold-duotone';
import { CupIconFill as CupIconFill } from './cup-fill';
import { CupIconFillDuotone as CupIconFillDuotone } from './cup-fill-duotone';

export interface CupIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CupIcon = memo(forwardRef<SVGSVGElement, CupIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CupIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CupIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CupIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CupIconFill ref={ref} {...props} />;
  if (duotone) return <CupIconDuotone ref={ref} {...props} />;
  return <RegularCupIcon ref={ref} {...props} />;
}));

CupIcon.displayName = 'CupIcon';

export { CupIcon };
