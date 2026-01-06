import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsLeftIcon as RegularChevronsLeftIcon } from './chevrons-left';
import { ChevronsLeftIconDuotone as ChevronsLeftIconDuotone } from './chevrons-left-duotone';
import { ChevronsLeftIconBold as ChevronsLeftIconBold } from './chevrons-left-bold';
import { ChevronsLeftIconBoldDuotone as ChevronsLeftIconBoldDuotone } from './chevrons-left-bold-duotone';
import { ChevronsLeftIconFill as ChevronsLeftIconFill } from './chevrons-left-fill';
import { ChevronsLeftIconFillDuotone as ChevronsLeftIconFillDuotone } from './chevrons-left-fill-duotone';

export interface ChevronsLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronsLeftIcon = memo(forwardRef<SVGSVGElement, ChevronsLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronsLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronsLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronsLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronsLeftIcon ref={ref} {...props} />;
}));

ChevronsLeftIcon.displayName = 'ChevronsLeftIcon';

export { ChevronsLeftIcon };
