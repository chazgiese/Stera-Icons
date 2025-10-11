import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusSquareIcon as PlusSquareIconRegular } from './plus-square';
import { PlusSquareIconBold } from './plus-square-bold';
import { PlusSquareIconFilled } from './plus-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PlusSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const PlusSquareIcon = memo(forwardRef<SVGSVGElement, PlusSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlusSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlusSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlusSquareIconRegular ref={ref} {...props} />;
  }
}));

PlusSquareIcon.displayName = 'PlusSquareIcon';

export { PlusSquareIcon };
