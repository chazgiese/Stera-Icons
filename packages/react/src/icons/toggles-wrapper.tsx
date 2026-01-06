import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TogglesIcon as RegularTogglesIcon } from './toggles';
import { TogglesIconDuotone as TogglesIconDuotone } from './toggles-duotone';
import { TogglesIconBold as TogglesIconBold } from './toggles-bold';
import { TogglesIconBoldDuotone as TogglesIconBoldDuotone } from './toggles-bold-duotone';
import { TogglesIconFill as TogglesIconFill } from './toggles-fill';
import { TogglesIconFillDuotone as TogglesIconFillDuotone } from './toggles-fill-duotone';

export interface TogglesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TogglesIcon = memo(forwardRef<SVGSVGElement, TogglesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TogglesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TogglesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TogglesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TogglesIconFill ref={ref} {...props} />;
  if (duotone) return <TogglesIconDuotone ref={ref} {...props} />;
  return <RegularTogglesIcon ref={ref} {...props} />;
}));

TogglesIcon.displayName = 'TogglesIcon';

export { TogglesIcon };
