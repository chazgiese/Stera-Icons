import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchRegularProps = Omit<IconBaseProps, 'children'>;

const GitBranchRegular = memo(
  forwardRef<SVGSVGElement, GitBranchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 2.25a3.25 3.25 0 0 1 .75 6.41V9a3.75 3.75 0 0 1-3.75 3.75h-7c-1.24 0-2.25 1-2.25 2.25v.34a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 1 1 1.5 0V12c.63-.47 1.4-.75 2.25-.75h7c1.24 0 2.25-1 2.25-2.25v-.34a3.25 3.25 0 0 1 .75-6.41m-13 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m13 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchRegular.displayName = 'GitBranchRegular';

// Triple export pattern (lucide-react style)
export { GitBranchRegular, GitBranchRegular as GitBranchRegularIcon, GitBranchRegular as SiGitBranchRegular };
export default GitBranchRegular;
export type { GitBranchRegularProps };
