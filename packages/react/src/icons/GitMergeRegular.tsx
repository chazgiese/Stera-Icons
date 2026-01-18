import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitMergeRegularProps = Omit<IconBaseProps, 'children'>;

const GitMergeRegular = memo(
  forwardRef<SVGSVGElement, GitMergeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.5 2.25a3.25 3.25 0 0 1 .81 6.4 3.25 3.25 0 0 0 3.19 2.6h5.84a3.25 3.25 0 1 1 0 1.5H9.5c-1.26 0-2.4-.5-3.25-1.29v3.88a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 0 1 .75-6.41m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m13-6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-13-6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeRegular.displayName = 'GitMergeRegular';

// Triple export pattern (lucide-react style)
export { GitMergeRegular, GitMergeRegular as GitMergeRegularIcon, GitMergeRegular as SiGitMergeRegular };
export type { GitMergeRegularProps };
