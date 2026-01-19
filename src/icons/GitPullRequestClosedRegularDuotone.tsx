import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestClosedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-closed-duotone" {...props}>
      <path d="M6.25 15.34a3 3 0 0 0-1.5 0V8.66a3 3 0 0 0 1.5 0zM18.5 10.25c.41 0 .75.34.75.75v4.34a3 3 0 0 0-1.5 0V11c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20.47 2.47a.75.75 0 1 1 1.06 1.06L19.56 5.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L18.5 6.56l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z" />
    </IconBase>
  ))
);

GitPullRequestClosedRegularDuotone.displayName = 'GitPullRequestClosedRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedRegularDuotone, GitPullRequestClosedRegularDuotone as GitPullRequestClosedRegularDuotoneIcon, GitPullRequestClosedRegularDuotone as SiGitPullRequestClosedRegularDuotone };
export type { GitPullRequestClosedRegularDuotoneProps };
