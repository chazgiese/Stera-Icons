import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsDownIcon as RegularChevronsDownIcon } from './chevrons-down';
import { ChevronsDownIconDuotone as ChevronsDownIconDuotone } from './chevrons-down-duotone';
import { ChevronsDownIconBold as ChevronsDownIconBold } from './chevrons-down-bold';
import { ChevronsDownIconBoldDuotone as ChevronsDownIconBoldDuotone } from './chevrons-down-bold-duotone';
import { ChevronsDownIconFill as ChevronsDownIconFill } from './chevrons-down-fill';
import { ChevronsDownIconFillDuotone as ChevronsDownIconFillDuotone } from './chevrons-down-fill-duotone';

export interface ChevronsDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronsDownIcon = memo(forwardRef<SVGSVGElement, ChevronsDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronsDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronsDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronsDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronsDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronsDownIcon ref={ref} {...props} />;
}));

ChevronsDownIcon.displayName = 'ChevronsDownIcon';

export { ChevronsDownIcon };
