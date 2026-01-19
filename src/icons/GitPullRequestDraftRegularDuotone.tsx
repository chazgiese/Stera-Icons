import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestDraftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft-duotone" {...props}>
      <path d="M6.25 15.34a3 3 0 0 0-1.5 0V8.66a3 3 0 0 0 1.5 0zM18.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestDraftRegularDuotone.displayName = 'GitPullRequestDraftRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftRegularDuotone, GitPullRequestDraftRegularDuotone as GitPullRequestDraftRegularDuotoneIcon, GitPullRequestDraftRegularDuotone as SiGitPullRequestDraftRegularDuotone };
export type { GitPullRequestDraftRegularDuotoneProps };
