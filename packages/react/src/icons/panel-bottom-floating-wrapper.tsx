import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelBottomFloatingIcon as RegularPanelBottomFloatingIcon } from './panel-bottom-floating';
import { PanelBottomFloatingIconDuotone as PanelBottomFloatingIconDuotone } from './panel-bottom-floating-duotone';
import { PanelBottomFloatingIconBold as PanelBottomFloatingIconBold } from './panel-bottom-floating-bold';
import { PanelBottomFloatingIconBoldDuotone as PanelBottomFloatingIconBoldDuotone } from './panel-bottom-floating-bold-duotone';
import { PanelBottomFloatingIconFill as PanelBottomFloatingIconFill } from './panel-bottom-floating-fill';
import { PanelBottomFloatingIconFillDuotone as PanelBottomFloatingIconFillDuotone } from './panel-bottom-floating-fill-duotone';

export interface PanelBottomFloatingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelBottomFloatingIcon = memo(forwardRef<SVGSVGElement, PanelBottomFloatingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelBottomFloatingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelBottomFloatingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelBottomFloatingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelBottomFloatingIconFill ref={ref} {...props} />;
  if (duotone) return <PanelBottomFloatingIconDuotone ref={ref} {...props} />;
  return <RegularPanelBottomFloatingIcon ref={ref} {...props} />;
}));

PanelBottomFloatingIcon.displayName = 'PanelBottomFloatingIcon';

export { PanelBottomFloatingIcon };
