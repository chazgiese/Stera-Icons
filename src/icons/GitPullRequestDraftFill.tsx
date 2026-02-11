import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft-fill" {...props}>
      <path d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

GitPullRequestDraftFill.displayName = 'GitPullRequestDraftFill';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftFill, GitPullRequestDraftFill as GitPullRequestDraftFillIcon, GitPullRequestDraftFill as SiGitPullRequestDraftFill };
export default GitPullRequestDraftFill;
export type { GitPullRequestDraftFillProps };
