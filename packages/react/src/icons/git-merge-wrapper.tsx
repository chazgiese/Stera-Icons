import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitMergeIcon as GitMergeIconRegular } from './git-merge';
import { GitMergeIconBold } from './git-merge-bold';
import { GitMergeIconFilled } from './git-merge-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <GitMergeIconRegular ref={ref} {...props} />;
  }
}));

GitMergeIcon.displayName = 'GitMergeIcon';

export { GitMergeIcon };
