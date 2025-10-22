import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GitPullRequestClosedIcon as RegularGitPullRequestClosedIcon } from './git-pull-request-closed';
import { GitPullRequestClosedIconBold } from './git-pull-request-closed-bold';
import { GitPullRequestClosedIconFilled } from './git-pull-request-closed-filled';
import { GitPullRequestClosedIconFilltone } from './git-pull-request-closed-filltone';
import { GitPullRequestClosedIconLinetone } from './git-pull-request-closed-linetone';

export interface GitPullRequestClosedIconProps extends IconProps {
  variant?: IconVariant;
}

const GitPullRequestClosedIcon = memo(forwardRef<SVGSVGElement, GitPullRequestClosedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitPullRequestClosedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitPullRequestClosedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GitPullRequestClosedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GitPullRequestClosedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGitPullRequestClosedIcon ref={ref} {...props} />;
  }
}));

GitPullRequestClosedIcon.displayName = 'GitPullRequestClosedIcon';

export { GitPullRequestClosedIcon };
