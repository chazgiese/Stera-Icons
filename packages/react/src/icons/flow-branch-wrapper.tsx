import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowBranchIcon as RegularFlowBranchIcon } from './flow-branch';
import { FlowBranchIconDuotone as FlowBranchIconDuotone } from './flow-branch-duotone';
import { FlowBranchIconBold as FlowBranchIconBold } from './flow-branch-bold';
import { FlowBranchIconBoldDuotone as FlowBranchIconBoldDuotone } from './flow-branch-bold-duotone';
import { FlowBranchIconFill as FlowBranchIconFill } from './flow-branch-fill';
import { FlowBranchIconFillDuotone as FlowBranchIconFillDuotone } from './flow-branch-fill-duotone';

export interface FlowBranchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowBranchIcon = memo(forwardRef<SVGSVGElement, FlowBranchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowBranchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowBranchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowBranchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowBranchIconFill ref={ref} {...props} />;
  if (duotone) return <FlowBranchIconDuotone ref={ref} {...props} />;
  return <RegularFlowBranchIcon ref={ref} {...props} />;
}));

FlowBranchIcon.displayName = 'FlowBranchIcon';

export { FlowBranchIcon };
