import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveEaseIcon as CurveEaseIconRegular } from './curve-ease';
import { CurveEaseIconBold } from './curve-ease-bold';
import { CurveEaseIconFilled } from './curve-ease-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CurveEaseIconProps extends IconProps {
  variant?: IconVariant;
}

const CurveEaseIcon = memo(forwardRef<SVGSVGElement, CurveEaseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurveEaseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurveEaseIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurveEaseIconRegular ref={ref} {...props} />;
  }
}));

CurveEaseIcon.displayName = 'CurveEaseIcon';

export { CurveEaseIcon };
