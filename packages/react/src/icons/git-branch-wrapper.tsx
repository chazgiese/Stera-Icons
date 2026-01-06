import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitBranchIcon as RegularGitBranchIcon } from './git-branch';
import { GitBranchIconDuotone as GitBranchIconDuotone } from './git-branch-duotone';
import { GitBranchIconBold as GitBranchIconBold } from './git-branch-bold';
import { GitBranchIconBoldDuotone as GitBranchIconBoldDuotone } from './git-branch-bold-duotone';
import { GitBranchIconFill as GitBranchIconFill } from './git-branch-fill';
import { GitBranchIconFillDuotone as GitBranchIconFillDuotone } from './git-branch-fill-duotone';

export interface GitBranchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitBranchIcon = memo(forwardRef<SVGSVGElement, GitBranchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitBranchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitBranchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitBranchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitBranchIconFill ref={ref} {...props} />;
  if (duotone) return <GitBranchIconDuotone ref={ref} {...props} />;
  return <RegularGitBranchIcon ref={ref} {...props} />;
}));

GitBranchIcon.displayName = 'GitBranchIcon';

export { GitBranchIcon };
