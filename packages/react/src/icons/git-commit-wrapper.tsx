import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitCommitIcon as GitCommitIconRegular } from './git-commit';
import { GitCommitIconBold } from './git-commit-bold';
import { GitCommitIconFilled } from './git-commit-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface GitCommitIconProps extends IconProps {
  variant?: IconVariant;
}

const GitCommitIcon = memo(forwardRef<SVGSVGElement, GitCommitIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GitCommitIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GitCommitIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <GitCommitIconRegular ref={ref} {...props} />;
  }
}));

GitCommitIcon.displayName = 'GitCommitIcon';

export { GitCommitIcon };
