import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCommitBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit-bold-duotone" {...props}>
      <path d="M7.1 11a5 5 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-5.1a5 5 0 0 0 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitBoldDuotone.displayName = 'GitCommitBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitCommitBoldDuotone, GitCommitBoldDuotone as GitCommitBoldDuotoneIcon, GitCommitBoldDuotone as SiGitCommitBoldDuotone };
export type { GitCommitBoldDuotoneProps };
