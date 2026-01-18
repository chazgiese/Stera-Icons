import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCompareRegularProps = Omit<IconBaseProps, 'children'>;

const GitCompareRegular = memo(
  forwardRef<SVGSVGElement, GitCompareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 1.75a3.25 3.25 0 0 1 .75 6.41V16A3.75 3.75 0 0 1 16 19.75h-3.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.8.8 0 0 1-.17-.81v-.01l.05-.08.12-.16 3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16c1.24 0 2.25-1 2.25-2.25V8.16A3.25 3.25 0 0 1 19 1.75m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M9.47 1.47c.3-.3.77-.3 1.06 0l3 3a1 1 0 0 1 .16.24.8.8 0 0 1-.08.72l-.08.1-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H8c-1.24 0-2.25 1-2.25 2.25v7.84a3.25 3.25 0 1 1-1.5 0V8A3.75 3.75 0 0 1 8 4.25h3.19L9.47 2.53a.75.75 0 0 1 0-1.06M5 17.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCompareRegular.displayName = 'GitCompareRegular';

// Triple export pattern (lucide-react style)
export { GitCompareRegular, GitCompareRegular as GitCompareRegularIcon, GitCompareRegular as SiGitCompareRegular };
export type { GitCompareRegularProps };
