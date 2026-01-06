import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsUpIcon as RegularChevronsUpIcon } from './chevrons-up';
import { ChevronsUpIconDuotone as ChevronsUpIconDuotone } from './chevrons-up-duotone';
import { ChevronsUpIconBold as ChevronsUpIconBold } from './chevrons-up-bold';
import { ChevronsUpIconBoldDuotone as ChevronsUpIconBoldDuotone } from './chevrons-up-bold-duotone';
import { ChevronsUpIconFill as ChevronsUpIconFill } from './chevrons-up-fill';
import { ChevronsUpIconFillDuotone as ChevronsUpIconFillDuotone } from './chevrons-up-fill-duotone';

export interface ChevronsUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronsUpIcon = memo(forwardRef<SVGSVGElement, ChevronsUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronsUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronsUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronsUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronsUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronsUpIcon ref={ref} {...props} />;
}));

ChevronsUpIcon.displayName = 'ChevronsUpIcon';

export { ChevronsUpIcon };
