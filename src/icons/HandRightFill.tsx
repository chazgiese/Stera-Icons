import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandRightFillProps = Omit<IconBaseProps, 'children'>;

const HandRightFill = memo(
  forwardRef<SVGSVGElement, HandRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-fill" {...props}>
      <path fill="currentColor" d="M14.48 1c.97 0 1.81.78 1.81 1.8v7.62c0 .28.24.5.54.5s.54-.22.54-.5V6.06c.1-.92.9-1.61 1.81-1.61.98 0 1.82.78 1.82 1.8v8.05c0 4.83-4 8.7-8.88 8.7a8.8 8.8 0 0 1-8.75-7.26l-.03-.1-1.44-3.58-.03-.06-.09-.17a1.8 1.8 0 0 1 .76-2.3 1.8 1.8 0 0 1 2.46.65l1.95 3.21c.12.2.36.3.6.24a.5.5 0 0 0 .4-.48v-9.2c0-1.02.84-1.8 1.82-1.8.91 0 1.71.69 1.8 1.61l.02.19v5.9c0 .28.24.5.53.5s.54-.22.54-.5V2.8c0-1.02.84-1.8 1.82-1.8" />
    </IconBase>
  ))
);

HandRightFill.displayName = 'HandRightFill';

// Triple export pattern (lucide-react style)
export { HandRightFill, HandRightFill as HandRightFillIcon, HandRightFill as SiHandRightFill };
export default HandRightFill;
export type { HandRightFillProps };
