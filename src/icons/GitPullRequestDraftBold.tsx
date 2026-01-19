import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestDraftBoldProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftBold = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2a3.5 3.5 0 0 1 1 6.85v6.3a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

GitPullRequestDraftBold.displayName = 'GitPullRequestDraftBold';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftBold, GitPullRequestDraftBold as GitPullRequestDraftBoldIcon, GitPullRequestDraftBold as SiGitPullRequestDraftBold };
export type { GitPullRequestDraftBoldProps };
