import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsRightIcon as ChevronsRightIconRegular } from './chevrons-right';
import { ChevronsRightIconBold } from './chevrons-right-bold';
import { ChevronsRightIconFilled } from './chevrons-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChevronsRightIconRegular ref={ref} {...props} />;
  }
}));

ChevronsRightIcon.displayName = 'ChevronsRightIcon';

export { ChevronsRightIcon };
