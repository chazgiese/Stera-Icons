import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TennisBallIcon as RegularTennisBallIcon } from './tennis-ball';
import { TennisBallIconDuotone as TennisBallIconDuotone } from './tennis-ball-duotone';
import { TennisBallIconBold as TennisBallIconBold } from './tennis-ball-bold';
import { TennisBallIconBoldDuotone as TennisBallIconBoldDuotone } from './tennis-ball-bold-duotone';
import { TennisBallIconFill as TennisBallIconFill } from './tennis-ball-fill';
import { TennisBallIconFillDuotone as TennisBallIconFillDuotone } from './tennis-ball-fill-duotone';

export interface TennisBallIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TennisBallIcon = memo(forwardRef<SVGSVGElement, TennisBallIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TennisBallIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TennisBallIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TennisBallIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TennisBallIconFill ref={ref} {...props} />;
  if (duotone) return <TennisBallIconDuotone ref={ref} {...props} />;
  return <RegularTennisBallIcon ref={ref} {...props} />;
}));

TennisBallIcon.displayName = 'TennisBallIcon';

export { TennisBallIcon };
