import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestClosedBoldProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedBold = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-closed-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 10a1 1 0 0 1 1 1v4.15a3.5 3.5 0 1 1-2 0V11a1 1 0 0 1 1-1m0 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M20.3 2.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 1 1-1.42 1.4L18.5 6.92l-1.8 1.8a1 1 0 1 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

GitPullRequestClosedBold.displayName = 'GitPullRequestClosedBold';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedBold, GitPullRequestClosedBold as GitPullRequestClosedBoldIcon, GitPullRequestClosedBold as SiGitPullRequestClosedBold };
export type { GitPullRequestClosedBoldProps };
