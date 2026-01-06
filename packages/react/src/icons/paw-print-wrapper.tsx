import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PawPrintIcon as RegularPawPrintIcon } from './paw-print';
import { PawPrintIconDuotone as PawPrintIconDuotone } from './paw-print-duotone';
import { PawPrintIconBold as PawPrintIconBold } from './paw-print-bold';
import { PawPrintIconBoldDuotone as PawPrintIconBoldDuotone } from './paw-print-bold-duotone';
import { PawPrintIconFill as PawPrintIconFill } from './paw-print-fill';
import { PawPrintIconFillDuotone as PawPrintIconFillDuotone } from './paw-print-fill-duotone';

export interface PawPrintIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PawPrintIcon = memo(forwardRef<SVGSVGElement, PawPrintIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PawPrintIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PawPrintIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PawPrintIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PawPrintIconFill ref={ref} {...props} />;
  if (duotone) return <PawPrintIconDuotone ref={ref} {...props} />;
  return <RegularPawPrintIcon ref={ref} {...props} />;
}));

PawPrintIcon.displayName = 'PawPrintIcon';

export { PawPrintIcon };
