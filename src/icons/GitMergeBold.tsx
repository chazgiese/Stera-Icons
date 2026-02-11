import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeBoldProps = Omit<IconBaseProps, 'children'>;

const GitMergeBold = memo(
  forwardRef<SVGSVGElement, GitMergeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-merge-bold" {...props}>
      <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 0 1 1.12 6.82A3 3 0 0 0 9.5 11h5.65a3.5 3.5 0 1 1 0 2H9.5a5 5 0 0 1-3-1v3.15a3.5 3.5 0 1 1-2 0v-6.3A3.5 3.5 0 0 1 5.5 2m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeBold.displayName = 'GitMergeBold';

// Triple export pattern (lucide-react style)
export { GitMergeBold, GitMergeBold as GitMergeBoldIcon, GitMergeBold as SiGitMergeBold };
export default GitMergeBold;
export type { GitMergeBoldProps };
