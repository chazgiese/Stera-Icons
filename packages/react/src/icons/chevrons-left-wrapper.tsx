import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronsLeftIcon as ChevronsLeftIconRegular } from './chevrons-left';
import { ChevronsLeftIconBold } from './chevrons-left-bold';
import { ChevronsLeftIconFilled } from './chevrons-left-filled';
import { ChevronsLeftIconFilltone } from './chevrons-left-filltone';
import { ChevronsLeftIconLinetone } from './chevrons-left-linetone';

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
    case 'filltone':
      return <ChevronsLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronsLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronsLeftIconRegular ref={ref} {...props} />;
  }
}));

ChevronsLeftIcon.displayName = 'ChevronsLeftIcon';

export { ChevronsLeftIcon };
