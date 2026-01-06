import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelLeftFloatingIcon as RegularPanelLeftFloatingIcon } from './panel-left-floating';
import { PanelLeftFloatingIconDuotone as PanelLeftFloatingIconDuotone } from './panel-left-floating-duotone';
import { PanelLeftFloatingIconBold as PanelLeftFloatingIconBold } from './panel-left-floating-bold';
import { PanelLeftFloatingIconBoldDuotone as PanelLeftFloatingIconBoldDuotone } from './panel-left-floating-bold-duotone';
import { PanelLeftFloatingIconFill as PanelLeftFloatingIconFill } from './panel-left-floating-fill';
import { PanelLeftFloatingIconFillDuotone as PanelLeftFloatingIconFillDuotone } from './panel-left-floating-fill-duotone';

export interface PanelLeftFloatingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelLeftFloatingIcon = memo(forwardRef<SVGSVGElement, PanelLeftFloatingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelLeftFloatingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelLeftFloatingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelLeftFloatingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelLeftFloatingIconFill ref={ref} {...props} />;
  if (duotone) return <PanelLeftFloatingIconDuotone ref={ref} {...props} />;
  return <RegularPanelLeftFloatingIcon ref={ref} {...props} />;
}));

PanelLeftFloatingIcon.displayName = 'PanelLeftFloatingIcon';

export { PanelLeftFloatingIcon };
