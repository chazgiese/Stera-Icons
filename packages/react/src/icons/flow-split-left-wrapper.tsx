import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitLeftIcon as RegularFlowSplitLeftIcon } from './flow-split-left';
import { FlowSplitLeftIconDuotone as FlowSplitLeftIconDuotone } from './flow-split-left-duotone';
import { FlowSplitLeftIconBold as FlowSplitLeftIconBold } from './flow-split-left-bold';
import { FlowSplitLeftIconBoldDuotone as FlowSplitLeftIconBoldDuotone } from './flow-split-left-bold-duotone';
import { FlowSplitLeftIconFill as FlowSplitLeftIconFill } from './flow-split-left-fill';
import { FlowSplitLeftIconFillDuotone as FlowSplitLeftIconFillDuotone } from './flow-split-left-fill-duotone';

export interface FlowSplitLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitLeftIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitLeftIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitLeftIcon ref={ref} {...props} />;
}));

FlowSplitLeftIcon.displayName = 'FlowSplitLeftIcon';

export { FlowSplitLeftIcon };
