import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RectangleIcon as RectangleIconRegular } from './rectangle';
import { RectangleIconBold } from './rectangle-bold';
import { RectangleIconFilled } from './rectangle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface RectangleIconProps extends IconProps {
  variant?: IconVariant;
}

const RectangleIcon = memo(forwardRef<SVGSVGElement, RectangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RectangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RectangleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <RectangleIconRegular ref={ref} {...props} />;
  }
}));

RectangleIcon.displayName = 'RectangleIcon';

export { RectangleIcon };
