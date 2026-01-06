import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitRightIcon as RegularFlowSplitRightIcon } from './flow-split-right';
import { FlowSplitRightIconDuotone as FlowSplitRightIconDuotone } from './flow-split-right-duotone';
import { FlowSplitRightIconBold as FlowSplitRightIconBold } from './flow-split-right-bold';
import { FlowSplitRightIconBoldDuotone as FlowSplitRightIconBoldDuotone } from './flow-split-right-bold-duotone';
import { FlowSplitRightIconFill as FlowSplitRightIconFill } from './flow-split-right-fill';
import { FlowSplitRightIconFillDuotone as FlowSplitRightIconFillDuotone } from './flow-split-right-fill-duotone';

export interface FlowSplitRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitRightIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitRightIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitRightIcon ref={ref} {...props} />;
}));

FlowSplitRightIcon.displayName = 'FlowSplitRightIcon';

export { FlowSplitRightIcon };
