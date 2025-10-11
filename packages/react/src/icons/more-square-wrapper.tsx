import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreSquareIcon as MoreSquareIconRegular } from './more-square';
import { MoreSquareIconBold } from './more-square-bold';
import { MoreSquareIconFilled } from './more-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreSquareIcon = memo(forwardRef<SVGSVGElement, MoreSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreSquareIconRegular ref={ref} {...props} />;
  }
}));

MoreSquareIcon.displayName = 'MoreSquareIcon';

export { MoreSquareIcon };
