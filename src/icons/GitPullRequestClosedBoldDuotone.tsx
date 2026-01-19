import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestClosedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-closed-bold-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM18.5 10a1 1 0 0 1 1 1v4.15a3.5 3.5 0 0 0-2 0V11a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M20.3 2.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 1 1-1.42 1.4L18.5 6.92l-1.8 1.8a1 1 0 1 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

GitPullRequestClosedBoldDuotone.displayName = 'GitPullRequestClosedBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedBoldDuotone, GitPullRequestClosedBoldDuotone as GitPullRequestClosedBoldDuotoneIcon, GitPullRequestClosedBoldDuotone as SiGitPullRequestClosedBoldDuotone };
export type { GitPullRequestClosedBoldDuotoneProps };
