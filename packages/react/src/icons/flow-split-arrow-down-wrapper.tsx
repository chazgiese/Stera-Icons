import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowDownIcon as RegularFlowSplitArrowDownIcon } from './flow-split-arrow-down';
import { FlowSplitArrowDownIconDuotone as FlowSplitArrowDownIconDuotone } from './flow-split-arrow-down-duotone';
import { FlowSplitArrowDownIconBold as FlowSplitArrowDownIconBold } from './flow-split-arrow-down-bold';
import { FlowSplitArrowDownIconBoldDuotone as FlowSplitArrowDownIconBoldDuotone } from './flow-split-arrow-down-bold-duotone';
import { FlowSplitArrowDownIconFill as FlowSplitArrowDownIconFill } from './flow-split-arrow-down-fill';
import { FlowSplitArrowDownIconFillDuotone as FlowSplitArrowDownIconFillDuotone } from './flow-split-arrow-down-fill-duotone';

export interface FlowSplitArrowDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitArrowDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitArrowDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitArrowDownIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitArrowDownIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitArrowDownIcon ref={ref} {...props} />;
}));

FlowSplitArrowDownIcon.displayName = 'FlowSplitArrowDownIcon';

export { FlowSplitArrowDownIcon };
