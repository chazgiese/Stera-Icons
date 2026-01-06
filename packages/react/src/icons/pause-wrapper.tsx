import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseIcon as RegularPauseIcon } from './pause';
import { PauseIconDuotone as PauseIconDuotone } from './pause-duotone';
import { PauseIconBold as PauseIconBold } from './pause-bold';
import { PauseIconBoldDuotone as PauseIconBoldDuotone } from './pause-bold-duotone';
import { PauseIconFill as PauseIconFill } from './pause-fill';
import { PauseIconFillDuotone as PauseIconFillDuotone } from './pause-fill-duotone';

export interface PauseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PauseIcon = memo(forwardRef<SVGSVGElement, PauseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PauseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PauseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PauseIconFill ref={ref} {...props} />;
  if (duotone) return <PauseIconDuotone ref={ref} {...props} />;
  return <RegularPauseIcon ref={ref} {...props} />;
}));

PauseIcon.displayName = 'PauseIcon';

export { PauseIcon };
