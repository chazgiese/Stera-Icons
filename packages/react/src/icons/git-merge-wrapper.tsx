import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GitMergeIcon as RegularGitMergeIcon } from './git-merge';
import { GitMergeIconDuotone as GitMergeIconDuotone } from './git-merge-duotone';
import { GitMergeIconBold as GitMergeIconBold } from './git-merge-bold';
import { GitMergeIconBoldDuotone as GitMergeIconBoldDuotone } from './git-merge-bold-duotone';
import { GitMergeIconFill as GitMergeIconFill } from './git-merge-fill';
import { GitMergeIconFillDuotone as GitMergeIconFillDuotone } from './git-merge-fill-duotone';

export interface GitMergeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GitMergeIcon = memo(forwardRef<SVGSVGElement, GitMergeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitMergeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GitMergeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GitMergeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GitMergeIconFill ref={ref} {...props} />;
  if (duotone) return <GitMergeIconDuotone ref={ref} {...props} />;
  return <RegularGitMergeIcon ref={ref} {...props} />;
}));

GitMergeIcon.displayName = 'GitMergeIcon';

export { GitMergeIcon };
