import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeartBoldProps = Omit<IconBaseProps, 'children'>;

const HeartBold = memo(
  forwardRef<SVGSVGElement, HeartBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.76 2A6.3 6.3 0 0 1 23 8.34a9.6 9.6 0 0 1-1.9 5.4c-2.48 3.55-5.95 5.98-8.47 8.04a1 1 0 0 1-1.26 0c-2.52-2.06-5.99-4.5-8.47-8.03A9.6 9.6 0 0 1 1 8.34 6.3 6.3 0 0 1 7.24 2c1.91 0 3.62.88 4.76 2.25A6.2 6.2 0 0 1 16.76 2m0 2a4.2 4.2 0 0 0-3.85 2.53 1 1 0 0 1-1.82 0A4.2 4.2 0 0 0 7.24 4 4.3 4.3 0 0 0 3 8.34a7.6 7.6 0 0 0 1.54 4.26c2.1 3 4.94 5.1 7.46 7.12 2.52-2.02 5.36-4.12 7.46-7.12A7.6 7.6 0 0 0 21 8.34 4.3 4.3 0 0 0 16.76 4" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartBold.displayName = 'HeartBold';

// Triple export pattern (lucide-react style)
export { HeartBold, HeartBold as HeartBoldIcon, HeartBold as SiHeartBold };
export type { HeartBoldProps };
