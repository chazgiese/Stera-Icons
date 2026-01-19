import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitBranchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitBranchFillDuotone = memo(
  forwardRef<SVGSVGElement, GitBranchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-fill-duotone" {...props}>
      <path fill="currentColor" d="M19.5 9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0v2.69a4 4 0 0 1 2-.54h7a2 2 0 0 0 2-2v-.15a3.5 3.5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

GitBranchFillDuotone.displayName = 'GitBranchFillDuotone';

// Triple export pattern (lucide-react style)
export { GitBranchFillDuotone, GitBranchFillDuotone as GitBranchFillDuotoneIcon, GitBranchFillDuotone as SiGitBranchFillDuotone };
export default GitBranchFillDuotone;
export type { GitBranchFillDuotoneProps };
