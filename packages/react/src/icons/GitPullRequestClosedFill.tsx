import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestClosedFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2M18.5 10a1 1 0 0 1 1 1v4.15a3.5 3.5 0 1 1-2 0V11a1 1 0 0 1 1-1M20.3 2.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 1 1-1.42 1.4L18.5 6.92l-1.8 1.8a1 1 0 1 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

GitPullRequestClosedFill.displayName = 'GitPullRequestClosedFill';

export { GitPullRequestClosedFill };
export type { GitPullRequestClosedFillProps };
