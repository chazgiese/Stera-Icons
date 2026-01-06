import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestIcon as RegularGitPullRequestIcon } from './git-pull-request';
import { GitPullRequestIconDuotone as GitPullRequestIconDuotone } from './git-pull-request-duotone';
import { GitPullRequestIconBold as GitPullRequestIconBold } from './git-pull-request-bold';
import { GitPullRequestIconBoldDuotone as GitPullRequestIconBoldDuotone } from './git-pull-request-bold-duotone';
import { GitPullRequestIconFill as GitPullRequestIconFill } from './git-pull-request-fill';
import { GitPullRequestIconFillDuotone as GitPullRequestIconFillDuotone } from './git-pull-request-fill-duotone';

export interface GitPullRequestIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitPullRequestIcon = memo(forwardRef<SVGSVGElement, GitPullRequestIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitPullRequestIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitPullRequestIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitPullRequestIconFill ref={ref} {...props} />;
  if (duotone) return <GitPullRequestIconDuotone ref={ref} {...props} />;
  return <RegularGitPullRequestIcon ref={ref} {...props} />;
}));

GitPullRequestIcon.displayName = 'GitPullRequestIcon';

export { GitPullRequestIcon };
