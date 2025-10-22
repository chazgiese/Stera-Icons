import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronsDownIcon as RegularChevronsDownIcon } from './chevrons-down';
import { ChevronsDownIconBold } from './chevrons-down-bold';
import { ChevronsDownIconFilled } from './chevrons-down-filled';
import { ChevronsDownIconFilltone } from './chevrons-down-filltone';
import { ChevronsDownIconLinetone } from './chevrons-down-linetone';

export interface ChevronsDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronsDownIcon = memo(forwardRef<SVGSVGElement, ChevronsDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronsDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronsDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronsDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronsDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronsDownIcon ref={ref} {...props} />;
  }
}));

ChevronsDownIcon.displayName = 'ChevronsDownIcon';

export { ChevronsDownIcon };
