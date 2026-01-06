import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScribbleIcon as RegularScribbleIcon } from './scribble';
import { ScribbleIconDuotone as ScribbleIconDuotone } from './scribble-duotone';
import { ScribbleIconBold as ScribbleIconBold } from './scribble-bold';
import { ScribbleIconBoldDuotone as ScribbleIconBoldDuotone } from './scribble-bold-duotone';
import { ScribbleIconFill as ScribbleIconFill } from './scribble-fill';
import { ScribbleIconFillDuotone as ScribbleIconFillDuotone } from './scribble-fill-duotone';

export interface ScribbleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScribbleIcon = memo(forwardRef<SVGSVGElement, ScribbleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScribbleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScribbleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScribbleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScribbleIconFill ref={ref} {...props} />;
  if (duotone) return <ScribbleIconDuotone ref={ref} {...props} />;
  return <RegularScribbleIcon ref={ref} {...props} />;
}));

ScribbleIcon.displayName = 'ScribbleIcon';

export { ScribbleIcon };
