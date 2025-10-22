import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CurveEaseIcon as CurveEaseIconRegular } from './curve-ease';
import { CurveEaseIconBold } from './curve-ease-bold';
import { CurveEaseIconFilled } from './curve-ease-filled';
import { CurveEaseIconFilltone } from './curve-ease-filltone';
import { CurveEaseIconLinetone } from './curve-ease-linetone';

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
    case 'filltone':
      return <CurveEaseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CurveEaseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurveEaseIconRegular ref={ref} {...props} />;
  }
}));

CurveEaseIcon.displayName = 'CurveEaseIcon';

export { CurveEaseIcon };
