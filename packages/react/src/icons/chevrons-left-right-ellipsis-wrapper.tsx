import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsLeftRightEllipsisIcon as RegularChevronsLeftRightEllipsisIcon } from './chevrons-left-right-ellipsis';
import { ChevronsLeftRightEllipsisIconDuotone as ChevronsLeftRightEllipsisIconDuotone } from './chevrons-left-right-ellipsis-duotone';
import { ChevronsLeftRightEllipsisIconBold as ChevronsLeftRightEllipsisIconBold } from './chevrons-left-right-ellipsis-bold';
import { ChevronsLeftRightEllipsisIconBoldDuotone as ChevronsLeftRightEllipsisIconBoldDuotone } from './chevrons-left-right-ellipsis-bold-duotone';
import { ChevronsLeftRightEllipsisIconFill as ChevronsLeftRightEllipsisIconFill } from './chevrons-left-right-ellipsis-fill';
import { ChevronsLeftRightEllipsisIconFillDuotone as ChevronsLeftRightEllipsisIconFillDuotone } from './chevrons-left-right-ellipsis-fill-duotone';

export interface ChevronsLeftRightEllipsisIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronsLeftRightEllipsisIcon = memo(forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftRightEllipsisIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronsLeftRightEllipsisIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftRightEllipsisIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronsLeftRightEllipsisIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronsLeftRightEllipsisIconDuotone ref={ref} {...props} />;
  return <RegularChevronsLeftRightEllipsisIcon ref={ref} {...props} />;
}));

ChevronsLeftRightEllipsisIcon.displayName = 'ChevronsLeftRightEllipsisIcon';

export { ChevronsLeftRightEllipsisIcon };
