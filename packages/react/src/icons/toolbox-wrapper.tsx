import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToolboxIcon as RegularToolboxIcon } from './toolbox';
import { ToolboxIconDuotone as ToolboxIconDuotone } from './toolbox-duotone';
import { ToolboxIconBold as ToolboxIconBold } from './toolbox-bold';
import { ToolboxIconBoldDuotone as ToolboxIconBoldDuotone } from './toolbox-bold-duotone';
import { ToolboxIconFill as ToolboxIconFill } from './toolbox-fill';
import { ToolboxIconFillDuotone as ToolboxIconFillDuotone } from './toolbox-fill-duotone';

export interface ToolboxIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ToolboxIcon = memo(forwardRef<SVGSVGElement, ToolboxIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToolboxIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ToolboxIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ToolboxIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ToolboxIconFill ref={ref} {...props} />;
  if (duotone) return <ToolboxIconDuotone ref={ref} {...props} />;
  return <RegularToolboxIcon ref={ref} {...props} />;
}));

ToolboxIcon.displayName = 'ToolboxIcon';

export { ToolboxIcon };
