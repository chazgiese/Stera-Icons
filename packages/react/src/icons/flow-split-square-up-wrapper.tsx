import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareUpIcon as RegularFlowSplitSquareUpIcon } from './flow-split-square-up';
import { FlowSplitSquareUpIconDuotone as FlowSplitSquareUpIconDuotone } from './flow-split-square-up-duotone';
import { FlowSplitSquareUpIconBold as FlowSplitSquareUpIconBold } from './flow-split-square-up-bold';
import { FlowSplitSquareUpIconBoldDuotone as FlowSplitSquareUpIconBoldDuotone } from './flow-split-square-up-bold-duotone';
import { FlowSplitSquareUpIconFill as FlowSplitSquareUpIconFill } from './flow-split-square-up-fill';
import { FlowSplitSquareUpIconFillDuotone as FlowSplitSquareUpIconFillDuotone } from './flow-split-square-up-fill-duotone';

export interface FlowSplitSquareUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitSquareUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitSquareUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitSquareUpIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitSquareUpIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitSquareUpIcon ref={ref} {...props} />;
}));

FlowSplitSquareUpIcon.displayName = 'FlowSplitSquareUpIcon';

export { FlowSplitSquareUpIcon };
