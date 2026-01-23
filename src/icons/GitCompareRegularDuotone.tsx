import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCompareRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitCompareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-compare-duotone" {...props}>
      <path d="M19.75 16v.2A3.75 3.75 0 0 1 16 19.74h-3.19l-.75-.75.75-.75H16c1.16 0 2.12-.89 2.24-2.02l.01-.23V8.16a3 3 0 0 0 1.5 0zM11.94 5l-.75.75H8c-1.24 0-2.25 1-2.25 2.25v7.84a3 3 0 0 0-1.5 0V8A3.75 3.75 0 0 1 8 4.25h3.19z" opacity={0.4} />
        <path fill="currentColor" d="M13.47 15.47a.75.75 0 1 1 1.06 1.06L12.06 19l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 15.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M9.47 1.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L11.94 5 9.47 2.53a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M19 1.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCompareRegularDuotone.displayName = 'GitCompareRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitCompareRegularDuotone, GitCompareRegularDuotone as GitCompareRegularDuotoneIcon, GitCompareRegularDuotone as SiGitCompareRegularDuotone };
export default GitCompareRegularDuotone;
export type { GitCompareRegularDuotoneProps };
