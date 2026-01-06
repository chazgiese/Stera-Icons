import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PedestalIcon as RegularPedestalIcon } from './pedestal';
import { PedestalIconDuotone as PedestalIconDuotone } from './pedestal-duotone';
import { PedestalIconBold as PedestalIconBold } from './pedestal-bold';
import { PedestalIconBoldDuotone as PedestalIconBoldDuotone } from './pedestal-bold-duotone';
import { PedestalIconFill as PedestalIconFill } from './pedestal-fill';
import { PedestalIconFillDuotone as PedestalIconFillDuotone } from './pedestal-fill-duotone';

export interface PedestalIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PedestalIcon = memo(forwardRef<SVGSVGElement, PedestalIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PedestalIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PedestalIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PedestalIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PedestalIconFill ref={ref} {...props} />;
  if (duotone) return <PedestalIconDuotone ref={ref} {...props} />;
  return <RegularPedestalIcon ref={ref} {...props} />;
}));

PedestalIcon.displayName = 'PedestalIcon';

export { PedestalIcon };
