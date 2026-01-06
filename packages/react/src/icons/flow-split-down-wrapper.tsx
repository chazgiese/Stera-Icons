import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitDownIcon as RegularFlowSplitDownIcon } from './flow-split-down';
import { FlowSplitDownIconDuotone as FlowSplitDownIconDuotone } from './flow-split-down-duotone';
import { FlowSplitDownIconBold as FlowSplitDownIconBold } from './flow-split-down-bold';
import { FlowSplitDownIconBoldDuotone as FlowSplitDownIconBoldDuotone } from './flow-split-down-bold-duotone';
import { FlowSplitDownIconFill as FlowSplitDownIconFill } from './flow-split-down-fill';
import { FlowSplitDownIconFillDuotone as FlowSplitDownIconFillDuotone } from './flow-split-down-fill-duotone';

export interface FlowSplitDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitDownIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitDownIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitDownIcon ref={ref} {...props} />;
}));

FlowSplitDownIcon.displayName = 'FlowSplitDownIcon';

export { FlowSplitDownIcon };
