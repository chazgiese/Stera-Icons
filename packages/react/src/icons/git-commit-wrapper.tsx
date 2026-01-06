import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCommitIcon as RegularGitCommitIcon } from './git-commit';
import { GitCommitIconDuotone as GitCommitIconDuotone } from './git-commit-duotone';
import { GitCommitIconBold as GitCommitIconBold } from './git-commit-bold';
import { GitCommitIconBoldDuotone as GitCommitIconBoldDuotone } from './git-commit-bold-duotone';
import { GitCommitIconFill as GitCommitIconFill } from './git-commit-fill';
import { GitCommitIconFillDuotone as GitCommitIconFillDuotone } from './git-commit-fill-duotone';

export interface GitCommitIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitCommitIcon = memo(forwardRef<SVGSVGElement, GitCommitIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitCommitIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitCommitIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitCommitIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitCommitIconFill ref={ref} {...props} />;
  if (duotone) return <GitCommitIconDuotone ref={ref} {...props} />;
  return <RegularGitCommitIcon ref={ref} {...props} />;
}));

GitCommitIcon.displayName = 'GitCommitIcon';

export { GitCommitIcon };
