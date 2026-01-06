import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseCircleIcon as RegularPauseCircleIcon } from './pause-circle';
import { PauseCircleIconDuotone as PauseCircleIconDuotone } from './pause-circle-duotone';
import { PauseCircleIconBold as PauseCircleIconBold } from './pause-circle-bold';
import { PauseCircleIconBoldDuotone as PauseCircleIconBoldDuotone } from './pause-circle-bold-duotone';
import { PauseCircleIconFill as PauseCircleIconFill } from './pause-circle-fill';
import { PauseCircleIconFillDuotone as PauseCircleIconFillDuotone } from './pause-circle-fill-duotone';

export interface PauseCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PauseCircleIcon = memo(forwardRef<SVGSVGElement, PauseCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PauseCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PauseCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PauseCircleIconFill ref={ref} {...props} />;
  if (duotone) return <PauseCircleIconDuotone ref={ref} {...props} />;
  return <RegularPauseCircleIcon ref={ref} {...props} />;
}));

PauseCircleIcon.displayName = 'PauseCircleIcon';

export { PauseCircleIcon };
