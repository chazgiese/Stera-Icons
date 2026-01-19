import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitBranchBoldProps = Omit<IconBaseProps, 'children'>;

const GitBranchBold = memo(
  forwardRef<SVGSVGElement, GitBranchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 2a3.5 3.5 0 0 1 1 6.85V9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.15a3.5 3.5 0 1 1-2 0v-6.3a3.5 3.5 0 1 1 2 0v2.69a4 4 0 0 1 2-.54h7a2 2 0 0 0 2-2v-.15a3.5 3.5 0 0 1 1-6.85m-13 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchBold.displayName = 'GitBranchBold';

// Triple export pattern (lucide-react style)
export { GitBranchBold, GitBranchBold as GitBranchBoldIcon, GitBranchBold as SiGitBranchBold };
export default GitBranchBold;
export type { GitBranchBoldProps };
