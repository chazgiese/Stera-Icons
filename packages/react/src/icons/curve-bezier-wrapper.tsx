import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CurveBezierIcon as CurveBezierIconRegular } from './curve-bezier';
import { CurveBezierIconBold } from './curve-bezier-bold';
import { CurveBezierIconFilled } from './curve-bezier-filled';
import { CurveBezierIconFilltone } from './curve-bezier-filltone';
import { CurveBezierIconLinetone } from './curve-bezier-linetone';

export interface CurveBezierIconProps extends IconProps {
  variant?: IconVariant;
}

const CurveBezierIcon = memo(forwardRef<SVGSVGElement, CurveBezierIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CurveBezierIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CurveBezierIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CurveBezierIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CurveBezierIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CurveBezierIconRegular ref={ref} {...props} />;
  }
}));

CurveBezierIcon.displayName = 'CurveBezierIcon';

export { CurveBezierIcon };
