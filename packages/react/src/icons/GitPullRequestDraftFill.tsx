import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestDraftFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

GitPullRequestDraftFill.displayName = 'GitPullRequestDraftFill';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftFill, GitPullRequestDraftFill as GitPullRequestDraftFillIcon, GitPullRequestDraftFill as SiGitPullRequestDraftFill };
export type { GitPullRequestDraftFillProps };
