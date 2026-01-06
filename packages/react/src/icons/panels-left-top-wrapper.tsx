import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsLeftTopIcon as RegularPanelsLeftTopIcon } from './panels-left-top';
import { PanelsLeftTopIconDuotone as PanelsLeftTopIconDuotone } from './panels-left-top-duotone';
import { PanelsLeftTopIconBold as PanelsLeftTopIconBold } from './panels-left-top-bold';
import { PanelsLeftTopIconBoldDuotone as PanelsLeftTopIconBoldDuotone } from './panels-left-top-bold-duotone';
import { PanelsLeftTopIconFill as PanelsLeftTopIconFill } from './panels-left-top-fill';
import { PanelsLeftTopIconFillDuotone as PanelsLeftTopIconFillDuotone } from './panels-left-top-fill-duotone';

export interface PanelsLeftTopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PanelsLeftTopIcon = memo(forwardRef<SVGSVGElement, PanelsLeftTopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsLeftTopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PanelsLeftTopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PanelsLeftTopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PanelsLeftTopIconFill ref={ref} {...props} />;
  if (duotone) return <PanelsLeftTopIconDuotone ref={ref} {...props} />;
  return <RegularPanelsLeftTopIcon ref={ref} {...props} />;
}));

PanelsLeftTopIcon.displayName = 'PanelsLeftTopIcon';

export { PanelsLeftTopIcon };
