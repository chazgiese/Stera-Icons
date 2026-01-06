import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CylinderIcon as RegularCylinderIcon } from './cylinder';
import { CylinderIconDuotone as CylinderIconDuotone } from './cylinder-duotone';
import { CylinderIconBold as CylinderIconBold } from './cylinder-bold';
import { CylinderIconBoldDuotone as CylinderIconBoldDuotone } from './cylinder-bold-duotone';
import { CylinderIconFill as CylinderIconFill } from './cylinder-fill';
import { CylinderIconFillDuotone as CylinderIconFillDuotone } from './cylinder-fill-duotone';

export interface CylinderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CylinderIcon = memo(forwardRef<SVGSVGElement, CylinderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CylinderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CylinderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CylinderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CylinderIconFill ref={ref} {...props} />;
  if (duotone) return <CylinderIconDuotone ref={ref} {...props} />;
  return <RegularCylinderIcon ref={ref} {...props} />;
}));

CylinderIcon.displayName = 'CylinderIcon';

export { CylinderIcon };
