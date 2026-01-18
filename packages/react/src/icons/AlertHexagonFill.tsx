import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertHexagonFillProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonFill = memo(
  forwardRef<SVGSVGElement, AlertHexagonFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.91 2c1.24 0 2.08-.01 2.86.23a5 5 0 0 1 1.77 1c.6.53 1.04 1.25 1.68 2.31l1.6 2.6c.7 1.15 1.18 1.92 1.37 2.77a5 5 0 0 1 0 2.18c-.19.85-.67 1.62-1.38 2.77l-1.59 2.6c-.64 1.06-1.07 1.78-1.68 2.31a5 5 0 0 1-1.77 1c-.78.24-1.62.23-2.86.23H10.1c-1.24 0-2.08.01-2.86-.23a5 5 0 0 1-1.77-1c-.6-.53-1.04-1.25-1.68-2.31l-1.6-2.6C1.49 14.7 1 13.94.82 13.09a5 5 0 0 1 0-2.18c.19-.85.67-1.62 1.38-2.77l1.59-2.6c.64-1.06 1.07-1.78 1.68-2.31a5 5 0 0 1 1.77-1C8.01 2 8.85 2 10.1 2zM12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertHexagonFill.displayName = 'AlertHexagonFill';

export { AlertHexagonFill };
export type { AlertHexagonFillProps };
