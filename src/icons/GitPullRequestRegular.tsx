import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 .75 6.41v6.68a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 0 1 .75-6.41m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M13.97 1.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72h2.19a3.75 3.75 0 0 1 3.75 3.75v6.84a3.25 3.25 0 1 1-1.5 0V8.5c0-1.24-1-2.25-2.25-2.25h-2.19l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zm4.53 14.78a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestRegular.displayName = 'GitPullRequestRegular';

// Triple export pattern (lucide-react style)
export { GitPullRequestRegular, GitPullRequestRegular as GitPullRequestRegularIcon, GitPullRequestRegular as SiGitPullRequestRegular };
export default GitPullRequestRegular;
export type { GitPullRequestRegularProps };
