import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFill = memo(
  forwardRef<SVGSVGElement, CircleNotchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.83 4.4c.5-.49 1.28-.49 1.77 0 1.5 1.5 2.53 3.42 2.94 5.5s.2 4.25-.6 6.21c-.82 1.97-2.2 3.65-3.97 4.83-1.76 1.18-3.84 1.81-5.97 1.81s-4.2-.63-5.97-1.81-3.15-2.86-3.96-4.83c-.81-1.96-1.03-4.12-.61-6.2.41-2.1 1.44-4 2.94-5.51.49-.49 1.28-.49 1.77 0 .48.49.48 1.28 0 1.77C5 7.32 4.23 8.79 3.9 10.39s-.16 3.26.47 4.77c.62 1.5 1.68 2.8 3.04 3.7 1.35.9 2.95 1.39 4.58 1.39s3.23-.48 4.58-1.39c1.36-.9 2.42-2.2 3.04-3.7.63-1.51.79-3.17.47-4.77S19 7.32 17.83 6.17c-.48-.5-.48-1.28 0-1.77" />
    </IconBase>
  ))
);

CircleNotchFill.displayName = 'CircleNotchFill';

// Triple export pattern
export { CircleNotchFill, CircleNotchFill as CircleNotchFillIcon, CircleNotchFill as SiCircleNotchFill };
export default CircleNotchFill;
export type { CircleNotchFillProps };
