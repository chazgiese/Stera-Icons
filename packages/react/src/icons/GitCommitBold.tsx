import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCommitBoldProps = Omit<IconBaseProps, 'children'>;

const GitCommitBold = memo(
  forwardRef<SVGSVGElement, GitCommitBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 0 1 4.9 4H22a1 1 0 1 1 0 2h-5.1a5 5 0 0 1-9.8 0H2a1 1 0 1 1 0-2h5.1A5 5 0 0 1 12 7m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitBold.displayName = 'GitCommitBold';

export { GitCommitBold };
export type { GitCommitBoldProps };
