import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsRightIcon as RegularChevronsRightIcon } from './chevrons-right';
import { ChevronsRightIconDuotone as ChevronsRightIconDuotone } from './chevrons-right-duotone';
import { ChevronsRightIconBold as ChevronsRightIconBold } from './chevrons-right-bold';
import { ChevronsRightIconBoldDuotone as ChevronsRightIconBoldDuotone } from './chevrons-right-bold-duotone';
import { ChevronsRightIconFill as ChevronsRightIconFill } from './chevrons-right-fill';
import { ChevronsRightIconFillDuotone as ChevronsRightIconFillDuotone } from './chevrons-right-fill-duotone';

export interface ChevronsRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronsRightIcon = memo(forwardRef<SVGSVGElement, ChevronsRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronsRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronsRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronsRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronsRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronsRightIcon ref={ref} {...props} />;
}));

ChevronsRightIcon.displayName = 'ChevronsRightIcon';

export { ChevronsRightIcon };
