import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeartFillProps = Omit<IconBaseProps, 'children'>;

const HeartFill = memo(
  forwardRef<SVGSVGElement, HeartFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.76 2A6.3 6.3 0 0 1 23 8.34a9.6 9.6 0 0 1-1.9 5.4c-2.48 3.55-5.95 5.98-8.47 8.04a1 1 0 0 1-1.26 0c-2.52-2.06-5.99-4.5-8.47-8.03A9.6 9.6 0 0 1 1 8.34 6.3 6.3 0 0 1 7.24 2c1.91 0 3.62.88 4.76 2.25A6.2 6.2 0 0 1 16.76 2" />
    </IconBase>
  ))
);

HeartFill.displayName = 'HeartFill';

// Triple export pattern (lucide-react style)
export { HeartFill, HeartFill as HeartFillIcon, HeartFill as SiHeartFill };
export type { HeartFillProps };
