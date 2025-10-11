import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitBranchIcon as GitBranchIconRegular } from './git-branch';
import { GitBranchIconBold } from './git-branch-bold';
import { GitBranchIconFilled } from './git-branch-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GitBranchIconProps extends IconProps {
  variant?: IconVariant;
}

const GitBranchIcon = memo(forwardRef<SVGSVGElement, GitBranchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitBranchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitBranchIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GitBranchIconRegular ref={ref} {...props} />;
  }
}));

GitBranchIcon.displayName = 'GitBranchIcon';

export { GitBranchIcon };
