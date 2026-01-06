import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LeafIcon as RegularLeafIcon } from './leaf';
import { LeafIconDuotone as LeafIconDuotone } from './leaf-duotone';
import { LeafIconBold as LeafIconBold } from './leaf-bold';
import { LeafIconBoldDuotone as LeafIconBoldDuotone } from './leaf-bold-duotone';
import { LeafIconFill as LeafIconFill } from './leaf-fill';
import { LeafIconFillDuotone as LeafIconFillDuotone } from './leaf-fill-duotone';

export interface LeafIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LeafIcon = memo(forwardRef<SVGSVGElement, LeafIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LeafIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LeafIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LeafIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LeafIconFill ref={ref} {...props} />;
  if (duotone) return <LeafIconDuotone ref={ref} {...props} />;
  return <RegularLeafIcon ref={ref} {...props} />;
}));

LeafIcon.displayName = 'LeafIcon';

export { LeafIcon };
