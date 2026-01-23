import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitBoldProps = Omit<IconBaseProps, 'children'>;

const GitCommitBold = memo(
  forwardRef<SVGSVGElement, GitCommitBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 0 1 4.9 4H22a1 1 0 1 1 0 2h-5.1a5 5 0 0 1-9.8 0H2a1 1 0 1 1 0-2h5.1A5 5 0 0 1 12 7m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitBold.displayName = 'GitCommitBold';

// Triple export pattern (lucide-react style)
export { GitCommitBold, GitCommitBold as GitCommitBoldIcon, GitCommitBold as SiGitCommitBold };
export default GitCommitBold;
export type { GitCommitBoldProps };
