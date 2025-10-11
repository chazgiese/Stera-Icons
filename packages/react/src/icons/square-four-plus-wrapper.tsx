import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareFourPlusIcon as SquareFourPlusIconRegular } from './square-four-plus';
import { SquareFourPlusIconBold } from './square-four-plus-bold';
import { SquareFourPlusIconFilled } from './square-four-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SquareFourPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareFourPlusIcon = memo(forwardRef<SVGSVGElement, SquareFourPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareFourPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareFourPlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareFourPlusIconRegular ref={ref} {...props} />;
  }
}));

SquareFourPlusIcon.displayName = 'SquareFourPlusIcon';

export { SquareFourPlusIcon };
