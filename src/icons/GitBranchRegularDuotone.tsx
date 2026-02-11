import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitBranchRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitBranchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-duotone" {...props}>
      <path d="M19.25 9a3.75 3.75 0 0 1-3.75 3.75h-7c-1.24 0-2.25 1-2.25 2.25v.34a3 3 0 0 0-1.5 0V8.66a3 3 0 0 0 1.5 0V12c.63-.47 1.4-.75 2.25-.75h7c1.24 0 2.25-1 2.25-2.25v-.34a3 3 0 0 0 1.5 0z" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchRegularDuotone.displayName = 'GitBranchRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitBranchRegularDuotone, GitBranchRegularDuotone as GitBranchRegularDuotoneIcon, GitBranchRegularDuotone as SiGitBranchRegularDuotone };
export default GitBranchRegularDuotone;
export type { GitBranchRegularDuotoneProps };
