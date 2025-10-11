import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XSquareIcon as XSquareIconRegular } from './x-square';
import { XSquareIconBold } from './x-square-bold';
import { XSquareIconFilled } from './x-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface XSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const XSquareIcon = memo(forwardRef<SVGSVGElement, XSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <XSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <XSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <XSquareIconRegular ref={ref} {...props} />;
  }
}));

XSquareIcon.displayName = 'XSquareIcon';

export { XSquareIcon };
