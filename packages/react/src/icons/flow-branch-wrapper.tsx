import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowBranchIcon as FlowBranchIconRegular } from './flow-branch';
import { FlowBranchIconBold } from './flow-branch-bold';
import { FlowBranchIconFilled } from './flow-branch-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowBranchIconRegular ref={ref} {...props} />;
  }
}));

FlowBranchIcon.displayName = 'FlowBranchIcon';

export { FlowBranchIcon };
