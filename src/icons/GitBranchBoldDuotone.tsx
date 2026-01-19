import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitBranchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitBranchBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitBranchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M19.5 9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0v2.69a4 4 0 0 1 2-.54h7a2 2 0 0 0 2-2v-.15a3.5 3.5 0 0 0 2 0z" opacity={.4} />
    </IconBase>
  ))
);

GitBranchBoldDuotone.displayName = 'GitBranchBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitBranchBoldDuotone, GitBranchBoldDuotone as GitBranchBoldDuotoneIcon, GitBranchBoldDuotone as SiGitBranchBoldDuotone };
export type { GitBranchBoldDuotoneProps };
