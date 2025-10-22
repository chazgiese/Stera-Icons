import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronsRightIcon as RegularChevronsRightIcon } from './chevrons-right';
import { ChevronsRightIconBold } from './chevrons-right-bold';
import { ChevronsRightIconFilled } from './chevrons-right-filled';
import { ChevronsRightIconFilltone } from './chevrons-right-filltone';
import { ChevronsRightIconLinetone } from './chevrons-right-linetone';

export interface ChevronsRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronsRightIcon = memo(forwardRef<SVGSVGElement, ChevronsRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronsRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronsRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronsRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronsRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronsRightIcon ref={ref} {...props} />;
  }
}));

ChevronsRightIcon.displayName = 'ChevronsRightIcon';

export { ChevronsRightIcon };
