import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionFillProps = Omit<IconBaseProps, 'children'>;

const ConnectionFill = memo(
  forwardRef<SVGSVGElement, ConnectionFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
        <path fill="currentColor" d="M6.5 2.25a4.25 4.25 0 0 1 3.63 6.46l5.16 5.16q.98-.61 2.21-.62a4.25 4.25 0 1 1-3.63 2.04l-5.16-5.16q-.98.61-2.21.62a4.25 4.25 0 0 1 0-8.5" />
        <path fill="currentColor" d="M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
    </IconBase>
  ))
);

ConnectionFill.displayName = 'ConnectionFill';

export { ConnectionFill };
export type { ConnectionFillProps };
