import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelTopFloatingIcon as RegularPanelTopFloatingIcon } from './panel-top-floating';
import { PanelTopFloatingIconDuotone as PanelTopFloatingIconDuotone } from './panel-top-floating-duotone';
import { PanelTopFloatingIconBold as PanelTopFloatingIconBold } from './panel-top-floating-bold';
import { PanelTopFloatingIconBoldDuotone as PanelTopFloatingIconBoldDuotone } from './panel-top-floating-bold-duotone';
import { PanelTopFloatingIconFill as PanelTopFloatingIconFill } from './panel-top-floating-fill';
import { PanelTopFloatingIconFillDuotone as PanelTopFloatingIconFillDuotone } from './panel-top-floating-fill-duotone';

export interface PanelTopFloatingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelTopFloatingIcon = memo(forwardRef<SVGSVGElement, PanelTopFloatingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelTopFloatingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelTopFloatingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelTopFloatingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelTopFloatingIconFill ref={ref} {...props} />;
  if (duotone) return <PanelTopFloatingIconDuotone ref={ref} {...props} />;
  return <RegularPanelTopFloatingIcon ref={ref} {...props} />;
}));

PanelTopFloatingIcon.displayName = 'PanelTopFloatingIcon';

export { PanelTopFloatingIcon };
