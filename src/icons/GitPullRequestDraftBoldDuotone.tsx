import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-draft-bold-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={0.4} />
        <path fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestDraftBoldDuotone.displayName = 'GitPullRequestDraftBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftBoldDuotone, GitPullRequestDraftBoldDuotone as GitPullRequestDraftBoldDuotoneIcon, GitPullRequestDraftBoldDuotone as SiGitPullRequestDraftBoldDuotone };
export default GitPullRequestDraftBoldDuotone;
export type { GitPullRequestDraftBoldDuotoneProps };
