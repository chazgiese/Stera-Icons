import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitPullRequestBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-bold-duotone" {...props}>
      <path d="M6.5 15.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2 0zM15.5 4.5a4 4 0 0 1 4 4v6.65a3.5 3.5 0 0 0-2 0V8.5a2 2 0 0 0-2-2h-1.59l-1-1 1-1z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M13.8 1.8a1 1 0 1 1 1.4 1.4l-2.29 2.3 2.3 2.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4z" />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestBoldDuotone.displayName = 'GitPullRequestBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestBoldDuotone, GitPullRequestBoldDuotone as GitPullRequestBoldDuotoneIcon, GitPullRequestBoldDuotone as SiGitPullRequestBoldDuotone };
export type { GitPullRequestBoldDuotoneProps };
