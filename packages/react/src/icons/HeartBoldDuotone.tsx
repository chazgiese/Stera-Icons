import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeartBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartBoldDuotone = memo(
  forwardRef<SVGSVGElement, HeartBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m11.37 21.78-.01-.01M16.76 2A6.3 6.3 0 0 1 23 8.34a9.6 9.6 0 0 1-1.9 5.4c-2.48 3.54-5.94 5.98-8.46 8.03a1 1 0 0 0 0-1.55l-.64-.5c2.52-2.02 5.36-4.12 7.46-7.12A7.6 7.6 0 0 0 21 8.34 4.3 4.3 0 0 0 16.76 4a4.2 4.2 0 0 0-3.85 2.53 1 1 0 0 0 0-.83A6 6 0 0 0 12 4.25 6.2 6.2 0 0 1 16.76 2M11.61 7.04l-.02-.01-.01-.01z" />
        <path fill="currentColor" d="M7.24 2c2.53 0 4.7 1.53 5.67 3.7a1 1 0 0 1-1.82.83A4.2 4.2 0 0 0 7.24 4 4.3 4.3 0 0 0 3 8.34a7.6 7.6 0 0 0 1.54 4.26c2.28 3.25 5.42 5.45 8.1 7.62a1 1 0 0 1-1.27 1.56c-2.52-2.06-5.99-4.5-8.47-8.03A9.6 9.6 0 0 1 1 8.34 6.3 6.3 0 0 1 7.24 2" />
    </IconBase>
  ))
);

HeartBoldDuotone.displayName = 'HeartBoldDuotone';

export { HeartBoldDuotone };
export type { HeartBoldDuotoneProps };
