import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowDownArrowIcon as RegularFlowDownArrowIcon } from './flow-down-arrow';
import { FlowDownArrowIconDuotone as FlowDownArrowIconDuotone } from './flow-down-arrow-duotone';
import { FlowDownArrowIconBold as FlowDownArrowIconBold } from './flow-down-arrow-bold';
import { FlowDownArrowIconBoldDuotone as FlowDownArrowIconBoldDuotone } from './flow-down-arrow-bold-duotone';
import { FlowDownArrowIconFill as FlowDownArrowIconFill } from './flow-down-arrow-fill';
import { FlowDownArrowIconFillDuotone as FlowDownArrowIconFillDuotone } from './flow-down-arrow-fill-duotone';

export interface FlowDownArrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowDownArrowIcon = memo(forwardRef<SVGSVGElement, FlowDownArrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowDownArrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowDownArrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowDownArrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowDownArrowIconFill ref={ref} {...props} />;
  if (duotone) return <FlowDownArrowIconDuotone ref={ref} {...props} />;
  return <RegularFlowDownArrowIcon ref={ref} {...props} />;
}));

FlowDownArrowIcon.displayName = 'FlowDownArrowIcon';

export { FlowDownArrowIcon };
