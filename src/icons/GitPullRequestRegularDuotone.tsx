import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-duotone" {...props}>
      <path d="M6.25 15.34a3 3 0 0 0-1.5 0V8.66a3 3 0 0 0 1.5 0zM15.5 4.75a3.75 3.75 0 0 1 3.75 3.75v6.84a3 3 0 0 0-1.5 0V8.5c0-1.24-1-2.25-2.25-2.25h-2.19l-.75-.75.75-.75z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M13.97 1.97a.75.75 0 1 1 1.06 1.06L12.56 5.5l2.47 2.47a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestRegularDuotone.displayName = 'GitPullRequestRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestRegularDuotone, GitPullRequestRegularDuotone as GitPullRequestRegularDuotoneIcon, GitPullRequestRegularDuotone as SiGitPullRequestRegularDuotone };
export type { GitPullRequestRegularDuotoneProps };
