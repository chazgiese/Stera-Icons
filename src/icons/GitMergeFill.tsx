import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeFillProps = Omit<IconBaseProps, 'children'>;

const GitMergeFill = memo(
  forwardRef<SVGSVGElement, GitMergeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-merge-fill" {...props}>
      <path d="M5.5 2a3.5 3.5 0 0 1 1.12 6.82A3 3 0 0 0 9.5 11h5.65a3.5 3.5 0 1 1 0 2H9.5a5 5 0 0 1-3-1v3.15a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2" />
    </IconBase>
  ))
);

GitMergeFill.displayName = 'GitMergeFill';

// Triple export pattern (lucide-react style)
export { GitMergeFill, GitMergeFill as GitMergeFillIcon, GitMergeFill as SiGitMergeFill };
export default GitMergeFill;
export type { GitMergeFillProps };
