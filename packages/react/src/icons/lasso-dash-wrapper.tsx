import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LassoDashIcon as RegularLassoDashIcon } from './lasso-dash';
import { LassoDashIconDuotone as LassoDashIconDuotone } from './lasso-dash-duotone';
import { LassoDashIconBold as LassoDashIconBold } from './lasso-dash-bold';
import { LassoDashIconBoldDuotone as LassoDashIconBoldDuotone } from './lasso-dash-bold-duotone';
import { LassoDashIconFill as LassoDashIconFill } from './lasso-dash-fill';
import { LassoDashIconFillDuotone as LassoDashIconFillDuotone } from './lasso-dash-fill-duotone';

export interface LassoDashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LassoDashIcon = memo(forwardRef<SVGSVGElement, LassoDashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LassoDashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LassoDashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LassoDashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LassoDashIconFill ref={ref} {...props} />;
  if (duotone) return <LassoDashIconDuotone ref={ref} {...props} />;
  return <RegularLassoDashIcon ref={ref} {...props} />;
}));

LassoDashIcon.displayName = 'LassoDashIcon';

export { LassoDashIcon };
