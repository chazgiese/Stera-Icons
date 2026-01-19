import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestClosedRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-closed" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 .75 6.41v6.68a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 0 1 .75-6.41m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 10.25c.41 0 .75.34.75.75v4.34a3.25 3.25 0 1 1-1.5 0V11c0-.41.34-.75.75-.75m0 6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20.47 2.47a.75.75 0 1 1 1.06 1.06L19.56 5.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L18.5 6.56l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z" />
    </IconBase>
  ))
);

GitPullRequestClosedRegular.displayName = 'GitPullRequestClosedRegular';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedRegular, GitPullRequestClosedRegular as GitPullRequestClosedRegularIcon, GitPullRequestClosedRegular as SiGitPullRequestClosedRegular };
export default GitPullRequestClosedRegular;
export type { GitPullRequestClosedRegularProps };
