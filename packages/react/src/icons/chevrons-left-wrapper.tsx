import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsLeftIcon as ChevronsLeftIconRegular } from './chevrons-left';
import { ChevronsLeftIconBold } from './chevrons-left-bold';
import { ChevronsLeftIconFilled } from './chevrons-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronsLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronsLeftIcon = memo(forwardRef<SVGSVGElement, ChevronsLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronsLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronsLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronsLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronsLeftIcon.displayName = 'ChevronsLeftIcon';

export { ChevronsLeftIcon };
