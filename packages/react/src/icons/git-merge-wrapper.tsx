import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GitMergeIcon as RegularGitMergeIcon } from './git-merge';
import { GitMergeIconBold } from './git-merge-bold';
import { GitMergeIconFilled } from './git-merge-filled';
import { GitMergeIconFilltone } from './git-merge-filltone';
import { GitMergeIconLinetone } from './git-merge-linetone';

export interface GitMergeIconProps extends IconProps {
  variant?: IconVariant;
}

const GitMergeIcon = memo(forwardRef<SVGSVGElement, GitMergeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitMergeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitMergeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GitMergeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GitMergeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularGitMergeIcon ref={ref} {...props} />;
  }
}));

GitMergeIcon.displayName = 'GitMergeIcon';

export { GitMergeIcon };
