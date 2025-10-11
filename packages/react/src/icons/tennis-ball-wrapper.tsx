import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TennisBallIcon as TennisBallIconRegular } from './tennis-ball';
import { TennisBallIconBold } from './tennis-ball-bold';
import { TennisBallIconFilled } from './tennis-ball-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TennisBallIconProps extends IconProps {
  variant?: IconVariant;
}

const TennisBallIcon = memo(forwardRef<SVGSVGElement, TennisBallIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TennisBallIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TennisBallIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TennisBallIconRegular ref={ref} {...props} />;
  }
}));

TennisBallIcon.displayName = 'TennisBallIcon';

export { TennisBallIcon };
