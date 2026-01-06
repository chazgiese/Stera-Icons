import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsLeftBottomIcon as RegularPanelsLeftBottomIcon } from './panels-left-bottom';
import { PanelsLeftBottomIconDuotone as PanelsLeftBottomIconDuotone } from './panels-left-bottom-duotone';
import { PanelsLeftBottomIconBold as PanelsLeftBottomIconBold } from './panels-left-bottom-bold';
import { PanelsLeftBottomIconBoldDuotone as PanelsLeftBottomIconBoldDuotone } from './panels-left-bottom-bold-duotone';
import { PanelsLeftBottomIconFill as PanelsLeftBottomIconFill } from './panels-left-bottom-fill';
import { PanelsLeftBottomIconFillDuotone as PanelsLeftBottomIconFillDuotone } from './panels-left-bottom-fill-duotone';

export interface PanelsLeftBottomIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelsLeftBottomIcon = memo(forwardRef<SVGSVGElement, PanelsLeftBottomIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsLeftBottomIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelsLeftBottomIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelsLeftBottomIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelsLeftBottomIconFill ref={ref} {...props} />;
  if (duotone) return <PanelsLeftBottomIconDuotone ref={ref} {...props} />;
  return <RegularPanelsLeftBottomIcon ref={ref} {...props} />;
}));

PanelsLeftBottomIcon.displayName = 'PanelsLeftBottomIcon';

export { PanelsLeftBottomIcon };
