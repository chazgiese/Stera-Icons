import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestDraftIcon as RegularGitPullRequestDraftIcon } from './git-pull-request-draft';
import { GitPullRequestDraftIconDuotone as GitPullRequestDraftIconDuotone } from './git-pull-request-draft-duotone';
import { GitPullRequestDraftIconBold as GitPullRequestDraftIconBold } from './git-pull-request-draft-bold';
import { GitPullRequestDraftIconBoldDuotone as GitPullRequestDraftIconBoldDuotone } from './git-pull-request-draft-bold-duotone';
import { GitPullRequestDraftIconFill as GitPullRequestDraftIconFill } from './git-pull-request-draft-fill';
import { GitPullRequestDraftIconFillDuotone as GitPullRequestDraftIconFillDuotone } from './git-pull-request-draft-fill-duotone';

export interface GitPullRequestDraftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitPullRequestDraftIcon = memo(forwardRef<SVGSVGElement, GitPullRequestDraftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitPullRequestDraftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitPullRequestDraftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitPullRequestDraftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitPullRequestDraftIconFill ref={ref} {...props} />;
  if (duotone) return <GitPullRequestDraftIconDuotone ref={ref} {...props} />;
  return <RegularGitPullRequestDraftIcon ref={ref} {...props} />;
}));

GitPullRequestDraftIcon.displayName = 'GitPullRequestDraftIcon';

export { GitPullRequestDraftIcon };
