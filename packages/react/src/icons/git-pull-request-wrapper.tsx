import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GitPullRequestIcon as GitPullRequestIconRegular } from './git-pull-request';
import { GitPullRequestIconBold } from './git-pull-request-bold';
import { GitPullRequestIconFilled } from './git-pull-request-filled';
import { GitPullRequestIconFilltone } from './git-pull-request-filltone';
import { GitPullRequestIconLinetone } from './git-pull-request-linetone';

export interface GitPullRequestIconProps extends IconProps {
  variant?: IconVariant;
}

const GitPullRequestIcon = memo(forwardRef<SVGSVGElement, GitPullRequestIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitPullRequestIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitPullRequestIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GitPullRequestIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GitPullRequestIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <GitPullRequestIconRegular ref={ref} {...props} />;
  }
}));

GitPullRequestIcon.displayName = 'GitPullRequestIcon';

export { GitPullRequestIcon };
