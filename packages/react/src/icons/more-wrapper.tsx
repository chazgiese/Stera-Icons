import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreIcon as MoreIconRegular } from './more';
import { MoreIconBold } from './more-bold';
import { MoreIconFilled } from './more-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreIcon = memo(forwardRef<SVGSVGElement, MoreIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreIconRegular ref={ref} {...props} />;
  }
}));

MoreIcon.displayName = 'MoreIcon';

export { MoreIcon };
