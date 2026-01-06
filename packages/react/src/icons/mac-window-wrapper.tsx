import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MacWindowIcon as RegularMacWindowIcon } from './mac-window';
import { MacWindowIconDuotone as MacWindowIconDuotone } from './mac-window-duotone';
import { MacWindowIconBold as MacWindowIconBold } from './mac-window-bold';
import { MacWindowIconBoldDuotone as MacWindowIconBoldDuotone } from './mac-window-bold-duotone';
import { MacWindowIconFill as MacWindowIconFill } from './mac-window-fill';
import { MacWindowIconFillDuotone as MacWindowIconFillDuotone } from './mac-window-fill-duotone';

export interface MacWindowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MacWindowIcon = memo(forwardRef<SVGSVGElement, MacWindowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MacWindowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MacWindowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MacWindowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MacWindowIconFill ref={ref} {...props} />;
  if (duotone) return <MacWindowIconDuotone ref={ref} {...props} />;
  return <RegularMacWindowIcon ref={ref} {...props} />;
}));

MacWindowIcon.displayName = 'MacWindowIcon';

export { MacWindowIcon };
