import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitMergeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.62 8.82A3 3 0 0 0 9.5 11h5.65a3.5 3.5 0 0 0 0 2H9.5a5 5 0 0 1-3-1v3.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 0 0 2.12-.03" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeBoldDuotone.displayName = 'GitMergeBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitMergeBoldDuotone, GitMergeBoldDuotone as GitMergeBoldDuotoneIcon, GitMergeBoldDuotone as SiGitMergeBoldDuotone };
export type { GitMergeBoldDuotoneProps };
