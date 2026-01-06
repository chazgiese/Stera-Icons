import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsRightTopIcon as RegularPanelsRightTopIcon } from './panels-right-top';
import { PanelsRightTopIconDuotone as PanelsRightTopIconDuotone } from './panels-right-top-duotone';
import { PanelsRightTopIconBold as PanelsRightTopIconBold } from './panels-right-top-bold';
import { PanelsRightTopIconBoldDuotone as PanelsRightTopIconBoldDuotone } from './panels-right-top-bold-duotone';
import { PanelsRightTopIconFill as PanelsRightTopIconFill } from './panels-right-top-fill';
import { PanelsRightTopIconFillDuotone as PanelsRightTopIconFillDuotone } from './panels-right-top-fill-duotone';

export interface PanelsRightTopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelsRightTopIcon = memo(forwardRef<SVGSVGElement, PanelsRightTopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsRightTopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelsRightTopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelsRightTopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelsRightTopIconFill ref={ref} {...props} />;
  if (duotone) return <PanelsRightTopIconDuotone ref={ref} {...props} />;
  return <RegularPanelsRightTopIcon ref={ref} {...props} />;
}));

PanelsRightTopIcon.displayName = 'PanelsRightTopIcon';

export { PanelsRightTopIcon };
