import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsRightBottomIcon as RegularPanelsRightBottomIcon } from './panels-right-bottom';
import { PanelsRightBottomIconDuotone as PanelsRightBottomIconDuotone } from './panels-right-bottom-duotone';
import { PanelsRightBottomIconBold as PanelsRightBottomIconBold } from './panels-right-bottom-bold';
import { PanelsRightBottomIconBoldDuotone as PanelsRightBottomIconBoldDuotone } from './panels-right-bottom-bold-duotone';
import { PanelsRightBottomIconFill as PanelsRightBottomIconFill } from './panels-right-bottom-fill';
import { PanelsRightBottomIconFillDuotone as PanelsRightBottomIconFillDuotone } from './panels-right-bottom-fill-duotone';

export interface PanelsRightBottomIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelsRightBottomIcon = memo(forwardRef<SVGSVGElement, PanelsRightBottomIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsRightBottomIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelsRightBottomIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelsRightBottomIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelsRightBottomIconFill ref={ref} {...props} />;
  if (duotone) return <PanelsRightBottomIconDuotone ref={ref} {...props} />;
  return <RegularPanelsRightBottomIcon ref={ref} {...props} />;
}));

PanelsRightBottomIcon.displayName = 'PanelsRightBottomIcon';

export { PanelsRightBottomIcon };
