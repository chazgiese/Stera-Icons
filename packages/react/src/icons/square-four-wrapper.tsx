import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareFourIcon as SquareFourIconRegular } from './square-four';
import { SquareFourIconBold } from './square-four-bold';
import { SquareFourIconFilled } from './square-four-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SquareFourIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareFourIcon = memo(forwardRef<SVGSVGElement, SquareFourIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareFourIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareFourIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareFourIconRegular ref={ref} {...props} />;
  }
}));

SquareFourIcon.displayName = 'SquareFourIcon';

export { SquareFourIcon };
