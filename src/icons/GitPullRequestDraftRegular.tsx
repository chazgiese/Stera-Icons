import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 .75 6.41v6.68a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 0 1 .75-6.41m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M18.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

GitPullRequestDraftRegular.displayName = 'GitPullRequestDraftRegular';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftRegular, GitPullRequestDraftRegular as GitPullRequestDraftRegularIcon, GitPullRequestDraftRegular as SiGitPullRequestDraftRegular };
export default GitPullRequestDraftRegular;
export type { GitPullRequestDraftRegularProps };
