import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCommitFillProps = Omit<IconBaseProps, 'children'>;

const GitCommitFill = memo(
  forwardRef<SVGSVGElement, GitCommitFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 7a5 5 0 0 1 4.9 4H22a1 1 0 1 1 0 2h-5.1a5 5 0 0 1-9.8 0H2a1 1 0 1 1 0-2h5.1A5 5 0 0 1 12 7" />
    </IconBase>
  ))
);

GitCommitFill.displayName = 'GitCommitFill';

export { GitCommitFill };
export type { GitCommitFillProps };
