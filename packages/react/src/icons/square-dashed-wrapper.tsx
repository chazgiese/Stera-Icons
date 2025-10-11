import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareDashedIcon as SquareDashedIconRegular } from './square-dashed';
import { SquareDashedIconBold } from './square-dashed-bold';
import { SquareDashedIconFilled } from './square-dashed-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SquareDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareDashedIcon = memo(forwardRef<SVGSVGElement, SquareDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareDashedIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareDashedIconRegular ref={ref} {...props} />;
  }
}));

SquareDashedIcon.displayName = 'SquareDashedIcon';

export { SquareDashedIcon };
