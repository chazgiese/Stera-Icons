import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit-duotone" {...props}>
      <path d="M7.31 11.25a5 5 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-5.31a5 5 0 0 0 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitRegularDuotone.displayName = 'GitCommitRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitCommitRegularDuotone, GitCommitRegularDuotone as GitCommitRegularDuotoneIcon, GitCommitRegularDuotone as SiGitCommitRegularDuotone };
export default GitCommitRegularDuotone;
export type { GitCommitRegularDuotoneProps };
