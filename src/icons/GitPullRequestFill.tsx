import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-fill" {...props}>
      <path d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2M13.8 1.8a1 1 0 1 1 1.4 1.4l-1.29 1.3h1.59a4 4 0 0 1 4 4v6.65a3.5 3.5 0 1 1-2 0V8.5a2 2 0 0 0-2-2h-1.59l1.3 1.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

GitPullRequestFill.displayName = 'GitPullRequestFill';

// Triple export pattern (lucide-react style)
export { GitPullRequestFill, GitPullRequestFill as GitPullRequestFillIcon, GitPullRequestFill as SiGitPullRequestFill };
export default GitPullRequestFill;
export type { GitPullRequestFillProps };
