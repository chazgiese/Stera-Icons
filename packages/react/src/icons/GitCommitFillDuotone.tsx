import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCommitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.1 11a5 5 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-5.1a5 5 0 0 0 0-2z" />
        <path fill="currentColor" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

GitCommitFillDuotone.displayName = 'GitCommitFillDuotone';

export { GitCommitFillDuotone };
export type { GitCommitFillDuotoneProps };
