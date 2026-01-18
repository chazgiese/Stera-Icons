import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionRegularProps = Omit<IconBaseProps, 'children'>;

const ConnectionRegular = memo(
  forwardRef<SVGSVGElement, ConnectionRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2.25a4.25 4.25 0 0 1 3.49 6.68L15.07 14a4.25 4.25 0 1 1-1.06 1.06L8.93 10A4.25 4.25 0 1 1 6.5 2.25m11 12.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-11-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionRegular.displayName = 'ConnectionRegular';

export { ConnectionRegular };
export type { ConnectionRegularProps };
