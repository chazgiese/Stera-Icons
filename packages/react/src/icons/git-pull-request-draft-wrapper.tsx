import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GitPullRequestDraftIcon as RegularGitPullRequestDraftIcon } from './git-pull-request-draft';
import { GitPullRequestDraftIconBold } from './git-pull-request-draft-bold';
import { GitPullRequestDraftIconFilled } from './git-pull-request-draft-filled';
import { GitPullRequestDraftIconFilltone } from './git-pull-request-draft-filltone';
import { GitPullRequestDraftIconLinetone } from './git-pull-request-draft-linetone';

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
    case 'filltone':
      return <GitPullRequestDraftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GitPullRequestDraftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGitPullRequestDraftIcon ref={ref} {...props} />;
  }
}));

GitPullRequestDraftIcon.displayName = 'GitPullRequestDraftIcon';

export { GitPullRequestDraftIcon };
