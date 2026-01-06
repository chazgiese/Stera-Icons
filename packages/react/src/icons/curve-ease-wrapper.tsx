import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveEaseIcon as RegularCurveEaseIcon } from './curve-ease';
import { CurveEaseIconDuotone as CurveEaseIconDuotone } from './curve-ease-duotone';
import { CurveEaseIconBold as CurveEaseIconBold } from './curve-ease-bold';
import { CurveEaseIconBoldDuotone as CurveEaseIconBoldDuotone } from './curve-ease-bold-duotone';
import { CurveEaseIconFill as CurveEaseIconFill } from './curve-ease-fill';
import { CurveEaseIconFillDuotone as CurveEaseIconFillDuotone } from './curve-ease-fill-duotone';

export interface CurveEaseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CurveEaseIcon = memo(forwardRef<SVGSVGElement, CurveEaseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurveEaseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CurveEaseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CurveEaseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CurveEaseIconFill ref={ref} {...props} />;
  if (duotone) return <CurveEaseIconDuotone ref={ref} {...props} />;
  return <RegularCurveEaseIcon ref={ref} {...props} />;
}));

CurveEaseIcon.displayName = 'CurveEaseIcon';

export { CurveEaseIcon };
