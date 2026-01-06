import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchwayIcon as RegularArchwayIcon } from './archway';
import { ArchwayIconDuotone as ArchwayIconDuotone } from './archway-duotone';
import { ArchwayIconBold as ArchwayIconBold } from './archway-bold';
import { ArchwayIconBoldDuotone as ArchwayIconBoldDuotone } from './archway-bold-duotone';
import { ArchwayIconFill as ArchwayIconFill } from './archway-fill';
import { ArchwayIconFillDuotone as ArchwayIconFillDuotone } from './archway-fill-duotone';

export interface ArchwayIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArchwayIcon = memo(forwardRef<SVGSVGElement, ArchwayIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArchwayIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArchwayIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArchwayIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArchwayIconFill ref={ref} {...props} />;
  if (duotone) return <ArchwayIconDuotone ref={ref} {...props} />;
  return <RegularArchwayIcon ref={ref} {...props} />;
}));

ArchwayIcon.displayName = 'ArchwayIcon';

export { ArchwayIcon };
