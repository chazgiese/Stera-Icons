import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-fill-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM15.5 4.5a4 4 0 0 1 4 4v6.65a3.5 3.5 0 0 0-2 0V8.5a2 2 0 0 0-2-2h-1.59l-1-1 1-1z" opacity={0.4} />
        <path fill="currentColor" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M13.8 1.8a1 1 0 1 1 1.4 1.4l-2.29 2.3 2.3 2.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4zM5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

GitPullRequestFillDuotone.displayName = 'GitPullRequestFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestFillDuotone, GitPullRequestFillDuotone as GitPullRequestFillDuotoneIcon, GitPullRequestFillDuotone as SiGitPullRequestFillDuotone };
export default GitPullRequestFillDuotone;
export type { GitPullRequestFillDuotoneProps };
