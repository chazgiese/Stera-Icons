import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitPullRequestClosedIcon as GitPullRequestClosedIconRegular } from './git-pull-request-closed';
import { GitPullRequestClosedIconBold } from './git-pull-request-closed-bold';
import { GitPullRequestClosedIconFilled } from './git-pull-request-closed-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <GitPullRequestClosedIconRegular ref={ref} {...props} />;
  }
}));

GitPullRequestClosedIcon.displayName = 'GitPullRequestClosedIcon';

export { GitPullRequestClosedIcon };
