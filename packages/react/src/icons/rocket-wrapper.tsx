import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RocketIcon as RegularRocketIcon } from './rocket';
import { RocketIconDuotone as RocketIconDuotone } from './rocket-duotone';
import { RocketIconBold as RocketIconBold } from './rocket-bold';
import { RocketIconBoldDuotone as RocketIconBoldDuotone } from './rocket-bold-duotone';
import { RocketIconFill as RocketIconFill } from './rocket-fill';
import { RocketIconFillDuotone as RocketIconFillDuotone } from './rocket-fill-duotone';

export interface RocketIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RocketIcon = memo(forwardRef<SVGSVGElement, RocketIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RocketIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RocketIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RocketIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RocketIconFill ref={ref} {...props} />;
  if (duotone) return <RocketIconDuotone ref={ref} {...props} />;
  return <RegularRocketIcon ref={ref} {...props} />;
}));

RocketIcon.displayName = 'RocketIcon';

export { RocketIcon };
