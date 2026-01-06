import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelRightFloatingIcon as RegularPanelRightFloatingIcon } from './panel-right-floating';
import { PanelRightFloatingIconDuotone as PanelRightFloatingIconDuotone } from './panel-right-floating-duotone';
import { PanelRightFloatingIconBold as PanelRightFloatingIconBold } from './panel-right-floating-bold';
import { PanelRightFloatingIconBoldDuotone as PanelRightFloatingIconBoldDuotone } from './panel-right-floating-bold-duotone';
import { PanelRightFloatingIconFill as PanelRightFloatingIconFill } from './panel-right-floating-fill';
import { PanelRightFloatingIconFillDuotone as PanelRightFloatingIconFillDuotone } from './panel-right-floating-fill-duotone';

export interface PanelRightFloatingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelRightFloatingIcon = memo(forwardRef<SVGSVGElement, PanelRightFloatingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelRightFloatingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelRightFloatingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelRightFloatingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelRightFloatingIconFill ref={ref} {...props} />;
  if (duotone) return <PanelRightFloatingIconDuotone ref={ref} {...props} />;
  return <RegularPanelRightFloatingIcon ref={ref} {...props} />;
}));

PanelRightFloatingIcon.displayName = 'PanelRightFloatingIcon';

export { PanelRightFloatingIcon };
