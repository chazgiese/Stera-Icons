import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveBezierIcon as RegularCurveBezierIcon } from './curve-bezier';
import { CurveBezierIconDuotone as CurveBezierIconDuotone } from './curve-bezier-duotone';
import { CurveBezierIconBold as CurveBezierIconBold } from './curve-bezier-bold';
import { CurveBezierIconBoldDuotone as CurveBezierIconBoldDuotone } from './curve-bezier-bold-duotone';
import { CurveBezierIconFill as CurveBezierIconFill } from './curve-bezier-fill';
import { CurveBezierIconFillDuotone as CurveBezierIconFillDuotone } from './curve-bezier-fill-duotone';

export interface CurveBezierIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurveBezierIcon = memo(forwardRef<SVGSVGElement, CurveBezierIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurveBezierIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurveBezierIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurveBezierIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurveBezierIconFill ref={ref} {...props} />;
  if (duotone) return <CurveBezierIconDuotone ref={ref} {...props} />;
  return <RegularCurveBezierIcon ref={ref} {...props} />;
}));

CurveBezierIcon.displayName = 'CurveBezierIcon';

export { CurveBezierIcon };
