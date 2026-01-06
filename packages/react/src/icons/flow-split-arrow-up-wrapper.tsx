import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowUpIcon as RegularFlowSplitArrowUpIcon } from './flow-split-arrow-up';
import { FlowSplitArrowUpIconDuotone as FlowSplitArrowUpIconDuotone } from './flow-split-arrow-up-duotone';
import { FlowSplitArrowUpIconBold as FlowSplitArrowUpIconBold } from './flow-split-arrow-up-bold';
import { FlowSplitArrowUpIconBoldDuotone as FlowSplitArrowUpIconBoldDuotone } from './flow-split-arrow-up-bold-duotone';
import { FlowSplitArrowUpIconFill as FlowSplitArrowUpIconFill } from './flow-split-arrow-up-fill';
import { FlowSplitArrowUpIconFillDuotone as FlowSplitArrowUpIconFillDuotone } from './flow-split-arrow-up-fill-duotone';

export interface FlowSplitArrowUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitArrowUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitArrowUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitArrowUpIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitArrowUpIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitArrowUpIcon ref={ref} {...props} />;
}));

FlowSplitArrowUpIcon.displayName = 'FlowSplitArrowUpIcon';

export { FlowSplitArrowUpIcon };
