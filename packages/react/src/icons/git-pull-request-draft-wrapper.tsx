import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestDraftIcon as GitPullRequestDraftIconRegular } from './git-pull-request-draft';
import { GitPullRequestDraftIconBold } from './git-pull-request-draft-bold';
import { GitPullRequestDraftIconFilled } from './git-pull-request-draft-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GitPullRequestDraftIconProps extends IconProps {
  variant?: IconVariant;
}

const GitPullRequestDraftIcon = memo(forwardRef<SVGSVGElement, GitPullRequestDraftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitPullRequestDraftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitPullRequestDraftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GitPullRequestDraftIconRegular ref={ref} {...props} />;
  }
}));

GitPullRequestDraftIcon.displayName = 'GitPullRequestDraftIcon';

export { GitPullRequestDraftIcon };
