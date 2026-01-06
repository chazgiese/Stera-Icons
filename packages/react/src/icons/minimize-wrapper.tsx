import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinimizeIcon as RegularMinimizeIcon } from './minimize';
import { MinimizeIconDuotone as MinimizeIconDuotone } from './minimize-duotone';
import { MinimizeIconBold as MinimizeIconBold } from './minimize-bold';
import { MinimizeIconBoldDuotone as MinimizeIconBoldDuotone } from './minimize-bold-duotone';
import { MinimizeIconFill as MinimizeIconFill } from './minimize-fill';
import { MinimizeIconFillDuotone as MinimizeIconFillDuotone } from './minimize-fill-duotone';

export interface MinimizeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MinimizeIcon = memo(forwardRef<SVGSVGElement, MinimizeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MinimizeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MinimizeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MinimizeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MinimizeIconFill ref={ref} {...props} />;
  if (duotone) return <MinimizeIconDuotone ref={ref} {...props} />;
  return <RegularMinimizeIcon ref={ref} {...props} />;
}));

MinimizeIcon.displayName = 'MinimizeIcon';

export { MinimizeIcon };
