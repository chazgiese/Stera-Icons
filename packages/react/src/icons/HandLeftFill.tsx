import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandLeftFillProps = Omit<IconBaseProps, 'children'>;

const HandLeftFill = memo(
  forwardRef<SVGSVGElement, HandLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.52 1c.98 0 1.82.78 1.82 1.8v7.05c0 .28.24.5.54.5s.53-.22.53-.5v-5.9l.01-.19c.1-.92.9-1.61 1.81-1.61.98 0 1.82.78 1.82 1.8v9.2c0 .23.16.43.4.48.24.06.48-.04.6-.24L19 10.2v-.01a1.8 1.8 0 0 1 2.46-.66 1.8 1.8 0 0 1 .76 2.31l-.09.17-.03.06-1.44 3.59-.03.1A8.8 8.8 0 0 1 11.88 23 8.8 8.8 0 0 1 3 14.3V6.25c0-1.02.84-1.8 1.82-1.8.91 0 1.7.69 1.8 1.61l.01.19v4.17c0 .28.24.5.54.5s.54-.22.54-.5V2.8c0-1.02.84-1.8 1.81-1.8" />
    </IconBase>
  ))
);

HandLeftFill.displayName = 'HandLeftFill';

// Triple export pattern (lucide-react style)
export { HandLeftFill, HandLeftFill as HandLeftFillIcon, HandLeftFill as SiHandLeftFill };
export type { HandLeftFillProps };
