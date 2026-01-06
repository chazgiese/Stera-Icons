import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExclamationPointIcon as RegularExclamationPointIcon } from './exclamation-point';
import { ExclamationPointIconDuotone as ExclamationPointIconDuotone } from './exclamation-point-duotone';
import { ExclamationPointIconBold as ExclamationPointIconBold } from './exclamation-point-bold';
import { ExclamationPointIconBoldDuotone as ExclamationPointIconBoldDuotone } from './exclamation-point-bold-duotone';
import { ExclamationPointIconFill as ExclamationPointIconFill } from './exclamation-point-fill';
import { ExclamationPointIconFillDuotone as ExclamationPointIconFillDuotone } from './exclamation-point-fill-duotone';

export interface ExclamationPointIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ExclamationPointIcon = memo(forwardRef<SVGSVGElement, ExclamationPointIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExclamationPointIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ExclamationPointIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ExclamationPointIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ExclamationPointIconFill ref={ref} {...props} />;
  if (duotone) return <ExclamationPointIconDuotone ref={ref} {...props} />;
  return <RegularExclamationPointIcon ref={ref} {...props} />;
}));

ExclamationPointIcon.displayName = 'ExclamationPointIcon';

export { ExclamationPointIcon };
