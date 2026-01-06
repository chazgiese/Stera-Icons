import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToolsIcon as RegularToolsIcon } from './tools';
import { ToolsIconDuotone as ToolsIconDuotone } from './tools-duotone';
import { ToolsIconBold as ToolsIconBold } from './tools-bold';
import { ToolsIconBoldDuotone as ToolsIconBoldDuotone } from './tools-bold-duotone';
import { ToolsIconFill as ToolsIconFill } from './tools-fill';
import { ToolsIconFillDuotone as ToolsIconFillDuotone } from './tools-fill-duotone';

export interface ToolsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ToolsIcon = memo(forwardRef<SVGSVGElement, ToolsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToolsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ToolsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ToolsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ToolsIconFill ref={ref} {...props} />;
  if (duotone) return <ToolsIconDuotone ref={ref} {...props} />;
  return <RegularToolsIcon ref={ref} {...props} />;
}));

ToolsIcon.displayName = 'ToolsIcon';

export { ToolsIcon };
