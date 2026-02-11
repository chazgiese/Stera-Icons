import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-merge-duotone" {...props}>
      <path d="M6.31 8.65a3.25 3.25 0 0 0 3.19 2.6h5.84a3 3 0 0 0 0 1.5H9.5c-1.26 0-2.4-.5-3.25-1.29v3.88a3 3 0 0 0-1.5 0V8.66a3 3 0 0 0 1.56-.01" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeRegularDuotone.displayName = 'GitMergeRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitMergeRegularDuotone, GitMergeRegularDuotone as GitMergeRegularDuotoneIcon, GitMergeRegularDuotone as SiGitMergeRegularDuotone };
export default GitMergeRegularDuotone;
export type { GitMergeRegularDuotoneProps };
