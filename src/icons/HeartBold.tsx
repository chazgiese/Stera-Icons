import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartBoldProps = Omit<IconBaseProps, 'children'>;

const HeartBold = memo(
  forwardRef<SVGSVGElement, HeartBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.29 3.25A5.73 5.73 0 0 1 22 9a8.6 8.6 0 0 1-1.73 4.87c-2.25 3.17-5.38 5.34-7.64 7.16a1 1 0 0 1-1.26 0c-2.26-1.82-5.4-4-7.64-7.16A8.6 8.6 0 0 1 2 9a5.73 5.73 0 0 1 5.71-5.75c1.71 0 3.24.76 4.29 1.95a5.7 5.7 0 0 1 4.29-1.95m0 2c-1.5 0-2.79.89-3.38 2.18a1 1 0 0 1-1.82 0A3.71 3.71 0 0 0 4 9c0 1.71.93 3.1 1.36 3.71 1.87 2.63 4.38 4.48 6.64 6.27 2.26-1.79 4.77-3.64 6.64-6.27A6.6 6.6 0 0 0 20 9a3.73 3.73 0 0 0-3.71-3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartBold.displayName = 'HeartBold';

// Triple export pattern (lucide-react style)
export { HeartBold, HeartBold as HeartBoldIcon, HeartBold as SiHeartBold };
export default HeartBold;
export type { HeartBoldProps };
