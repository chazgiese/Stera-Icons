import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestClosedIcon as RegularGitPullRequestClosedIcon } from './git-pull-request-closed';
import { GitPullRequestClosedIconDuotone as GitPullRequestClosedIconDuotone } from './git-pull-request-closed-duotone';
import { GitPullRequestClosedIconBold as GitPullRequestClosedIconBold } from './git-pull-request-closed-bold';
import { GitPullRequestClosedIconBoldDuotone as GitPullRequestClosedIconBoldDuotone } from './git-pull-request-closed-bold-duotone';
import { GitPullRequestClosedIconFill as GitPullRequestClosedIconFill } from './git-pull-request-closed-fill';
import { GitPullRequestClosedIconFillDuotone as GitPullRequestClosedIconFillDuotone } from './git-pull-request-closed-fill-duotone';

export interface GitPullRequestClosedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitPullRequestClosedIcon = memo(forwardRef<SVGSVGElement, GitPullRequestClosedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestClosedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitPullRequestClosedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitPullRequestClosedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitPullRequestClosedIconFill ref={ref} {...props} />;
  if (duotone) return <GitPullRequestClosedIconDuotone ref={ref} {...props} />;
  return <RegularGitPullRequestClosedIcon ref={ref} {...props} />;
}));

GitPullRequestClosedIcon.displayName = 'GitPullRequestClosedIcon';

export { GitPullRequestClosedIcon };
