import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestDraftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft-fill-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={0.4} />
        <path fill="currentColor" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

GitPullRequestDraftFillDuotone.displayName = 'GitPullRequestDraftFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftFillDuotone, GitPullRequestDraftFillDuotone as GitPullRequestDraftFillDuotoneIcon, GitPullRequestDraftFillDuotone as SiGitPullRequestDraftFillDuotone };
export default GitPullRequestDraftFillDuotone;
export type { GitPullRequestDraftFillDuotoneProps };
