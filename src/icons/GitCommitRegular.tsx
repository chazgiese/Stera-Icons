import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCommitRegularProps = Omit<IconBaseProps, 'children'>;

const GitCommitRegular = memo(
  forwardRef<SVGSVGElement, GitCommitRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.75 4.75 0 0 1 4.69 4H22a.75.75 0 0 1 0 1.5h-5.31a4.75 4.75 0 0 1-9.38 0H2a.75.75 0 0 1 0-1.5h5.31c.36-2.27 2.32-4 4.69-4m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitRegular.displayName = 'GitCommitRegular';

// Triple export pattern (lucide-react style)
export { GitCommitRegular, GitCommitRegular as GitCommitRegularIcon, GitCommitRegular as SiGitCommitRegular };
export default GitCommitRegular;
export type { GitCommitRegularProps };
