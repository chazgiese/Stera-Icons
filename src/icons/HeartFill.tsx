import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartFillProps = Omit<IconBaseProps, 'children'>;

const HeartFill = memo(
  forwardRef<SVGSVGElement, HeartFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-fill" {...props}>
      <path d="M16.29 3.25A5.73 5.73 0 0 1 22 9a8.6 8.6 0 0 1-1.73 4.87c-2.25 3.17-5.38 5.34-7.64 7.16a1 1 0 0 1-1.26 0c-2.26-1.82-5.4-4-7.64-7.16A8.6 8.6 0 0 1 2 9a5.73 5.73 0 0 1 5.71-5.75c1.71 0 3.24.76 4.29 1.95a5.7 5.7 0 0 1 4.29-1.95" />
    </IconBase>
  ))
);

HeartFill.displayName = 'HeartFill';

// Triple export pattern (lucide-react style)
export { HeartFill, HeartFill as HeartFillIcon, HeartFill as SiHeartFill };
export default HeartFill;
export type { HeartFillProps };
