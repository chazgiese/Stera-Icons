import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MacWindowCursorIcon as RegularMacWindowCursorIcon } from './mac-window-cursor';
import { MacWindowCursorIconDuotone as MacWindowCursorIconDuotone } from './mac-window-cursor-duotone';
import { MacWindowCursorIconBold as MacWindowCursorIconBold } from './mac-window-cursor-bold';
import { MacWindowCursorIconBoldDuotone as MacWindowCursorIconBoldDuotone } from './mac-window-cursor-bold-duotone';
import { MacWindowCursorIconFill as MacWindowCursorIconFill } from './mac-window-cursor-fill';
import { MacWindowCursorIconFillDuotone as MacWindowCursorIconFillDuotone } from './mac-window-cursor-fill-duotone';

export interface MacWindowCursorIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MacWindowCursorIcon = memo(forwardRef<SVGSVGElement, MacWindowCursorIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MacWindowCursorIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MacWindowCursorIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MacWindowCursorIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MacWindowCursorIconFill ref={ref} {...props} />;
  if (duotone) return <MacWindowCursorIconDuotone ref={ref} {...props} />;
  return <RegularMacWindowCursorIcon ref={ref} {...props} />;
}));

MacWindowCursorIcon.displayName = 'MacWindowCursorIcon';

export { MacWindowCursorIcon };
