import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit-fill-duotone" {...props}>
      <path d="M7.1 11a5 5 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-5.1a5 5 0 0 0 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

GitCommitFillDuotone.displayName = 'GitCommitFillDuotone';

// Triple export pattern (lucide-react style)
export { GitCommitFillDuotone, GitCommitFillDuotone as GitCommitFillDuotoneIcon, GitCommitFillDuotone as SiGitCommitFillDuotone };
export default GitCommitFillDuotone;
export type { GitCommitFillDuotoneProps };
