import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-closed-fill-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM18.5 10a1 1 0 0 1 1 1v4.15a3.5 3.5 0 0 0-2 0V11a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M20.3 2.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 1 1-1.42 1.4L18.5 6.92l-1.8 1.8a1 1 0 1 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

GitPullRequestClosedFillDuotone.displayName = 'GitPullRequestClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedFillDuotone, GitPullRequestClosedFillDuotone as GitPullRequestClosedFillDuotoneIcon, GitPullRequestClosedFillDuotone as SiGitPullRequestClosedFillDuotone };
export default GitPullRequestClosedFillDuotone;
export type { GitPullRequestClosedFillDuotoneProps };
