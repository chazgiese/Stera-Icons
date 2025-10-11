import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsMoveIcon as ArrowsMoveIconRegular } from './arrows-move';
import { ArrowsMoveIconBold } from './arrows-move-bold';
import { ArrowsMoveIconFilled } from './arrows-move-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowsMoveIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowsMoveIcon = memo(forwardRef<SVGSVGElement, ArrowsMoveIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowsMoveIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowsMoveIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowsMoveIconRegular ref={ref} {...props} />;
  }
}));

ArrowsMoveIcon.displayName = 'ArrowsMoveIcon';

export { ArrowsMoveIcon };
