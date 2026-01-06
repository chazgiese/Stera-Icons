import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreIcon as RegularMoreIcon } from './more';
import { MoreIconDuotone as MoreIconDuotone } from './more-duotone';
import { MoreIconBold as MoreIconBold } from './more-bold';
import { MoreIconBoldDuotone as MoreIconBoldDuotone } from './more-bold-duotone';
import { MoreIconFill as MoreIconFill } from './more-fill';
import { MoreIconFillDuotone as MoreIconFillDuotone } from './more-fill-duotone';

export interface MoreIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreIcon = memo(forwardRef<SVGSVGElement, MoreIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreIconFill ref={ref} {...props} />;
  if (duotone) return <MoreIconDuotone ref={ref} {...props} />;
  return <RegularMoreIcon ref={ref} {...props} />;
}));

MoreIcon.displayName = 'MoreIcon';

export { MoreIcon };
