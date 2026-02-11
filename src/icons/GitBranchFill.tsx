import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchFillProps = Omit<IconBaseProps, 'children'>;

const GitBranchFill = memo(
  forwardRef<SVGSVGElement, GitBranchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-fill" {...props}>
      <path d="M18.5 2a3.5 3.5 0 0 1 1 6.85V9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.15a3.5 3.5 0 1 1-2 0v-6.3a3.5 3.5 0 1 1 2 0v2.69a4 4 0 0 1 2-.54h7a2 2 0 0 0 2-2v-.15a3.5 3.5 0 0 1 1-6.85" />
    </IconBase>
  ))
);

GitBranchFill.displayName = 'GitBranchFill';

// Triple export pattern (lucide-react style)
export { GitBranchFill, GitBranchFill as GitBranchFillIcon, GitBranchFill as SiGitBranchFill };
export default GitBranchFill;
export type { GitBranchFillProps };
