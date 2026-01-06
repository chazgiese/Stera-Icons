import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareDownIcon as RegularFlowSplitSquareDownIcon } from './flow-split-square-down';
import { FlowSplitSquareDownIconDuotone as FlowSplitSquareDownIconDuotone } from './flow-split-square-down-duotone';
import { FlowSplitSquareDownIconBold as FlowSplitSquareDownIconBold } from './flow-split-square-down-bold';
import { FlowSplitSquareDownIconBoldDuotone as FlowSplitSquareDownIconBoldDuotone } from './flow-split-square-down-bold-duotone';
import { FlowSplitSquareDownIconFill as FlowSplitSquareDownIconFill } from './flow-split-square-down-fill';
import { FlowSplitSquareDownIconFillDuotone as FlowSplitSquareDownIconFillDuotone } from './flow-split-square-down-fill-duotone';

export interface FlowSplitSquareDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitSquareDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitSquareDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitSquareDownIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitSquareDownIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitSquareDownIcon ref={ref} {...props} />;
}));

FlowSplitSquareDownIcon.displayName = 'FlowSplitSquareDownIcon';

export { FlowSplitSquareDownIcon };
