import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowBranchIcon as RegularFlowBranchIcon } from './flow-branch';
import { FlowBranchIconBold } from './flow-branch-bold';
import { FlowBranchIconFilled } from './flow-branch-filled';
import { FlowBranchIconFilltone } from './flow-branch-filltone';
import { FlowBranchIconLinetone } from './flow-branch-linetone';

export interface FlowBranchIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowBranchIcon = memo(forwardRef<SVGSVGElement, FlowBranchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowBranchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowBranchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowBranchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowBranchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowBranchIcon ref={ref} {...props} />;
  }
}));

FlowBranchIcon.displayName = 'FlowBranchIcon';

export { FlowBranchIcon };
