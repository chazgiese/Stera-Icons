import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronsUpIcon as RegularChevronsUpIcon } from './chevrons-up';
import { ChevronsUpIconBold } from './chevrons-up-bold';
import { ChevronsUpIconFilled } from './chevrons-up-filled';
import { ChevronsUpIconFilltone } from './chevrons-up-filltone';
import { ChevronsUpIconLinetone } from './chevrons-up-linetone';

export interface ChevronsUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronsUpIcon = memo(forwardRef<SVGSVGElement, ChevronsUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronsUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronsUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronsUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronsUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronsUpIcon ref={ref} {...props} />;
  }
}));

ChevronsUpIcon.displayName = 'ChevronsUpIcon';

export { ChevronsUpIcon };
