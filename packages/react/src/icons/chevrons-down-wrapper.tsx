import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsDownIcon as ChevronsDownIconRegular } from './chevrons-down';
import { ChevronsDownIconBold } from './chevrons-down-bold';
import { ChevronsDownIconFilled } from './chevrons-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChevronsDownIconRegular ref={ref} {...props} />;
  }
}));

ChevronsDownIcon.displayName = 'ChevronsDownIcon';

export { ChevronsDownIcon };
