import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreSquareVerticalIcon as MoreSquareVerticalIconRegular } from './more-square-vertical';
import { MoreSquareVerticalIconBold } from './more-square-vertical-bold';
import { MoreSquareVerticalIconFilled } from './more-square-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreSquareVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreSquareVerticalIcon = memo(forwardRef<SVGSVGElement, MoreSquareVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreSquareVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreSquareVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreSquareVerticalIconRegular ref={ref} {...props} />;
  }
}));

MoreSquareVerticalIcon.displayName = 'MoreSquareVerticalIcon';

export { MoreSquareVerticalIcon };
