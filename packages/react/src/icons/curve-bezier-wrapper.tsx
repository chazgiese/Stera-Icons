import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveBezierIcon as CurveBezierIconRegular } from './curve-bezier';
import { CurveBezierIconBold } from './curve-bezier-bold';
import { CurveBezierIconFilled } from './curve-bezier-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CurveBezierIconRegular ref={ref} {...props} />;
  }
}));

CurveBezierIcon.displayName = 'CurveBezierIcon';

export { CurveBezierIcon };
