import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldProps = Omit<IconBaseProps, 'children'>;

const BasketballBold = memo(
  forwardRef<SVGSVGElement, BasketballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c1.64 0 3.2.38 4.58 1.05 2.83 1.37 4.96 3.99 5.66 7.14q.26 1.12.26 2.31c0 1.74-.42 3.37-1.17 4.82-1.16 2.25-3.11 4.02-5.49 4.95q-1.8.72-3.84.73c-2.14 0-4.14-.64-5.8-1.75-1.97-1.3-3.48-3.26-4.2-5.56q-.5-1.52-.5-3.19c0-1.67.4-3.25 1.09-4.66C3.95 4.6 6.47 2.54 9.52 1.8q1.2-.29 2.48-.29m-2.86 9.48q-.58.25-1.13.55.2.6.24 1.27c.09 1.35-.1 2.6-.26 3.75-.14.98-.26 1.88-.26 2.8C9 20.08 10.44 20.5 12 20.5q.87 0 1.7-.17c-2.03-2.52-3.67-5.93-4.56-9.35m3.67-1.03q-.9.14-1.77.37c.88 3.52 2.63 7 4.68 9.32 1.43-.7 2.64-1.79 3.48-3.13-.65-.64-1.39-1.24-2.18-1.88-1.55-1.25-3.36-2.68-4.21-4.68m-6.58 2.76q-1.27 1-2.18 2.31.61 1.59 1.76 2.8l.2-1.55c.17-1.17.32-2.23.24-3.34zm8.73-2.93c.69 1.15 1.89 2.14 3.32 3.3q.9.7 1.81 1.52.4-1.24.41-2.6 0-.69-.1-1.34c-1.8-.61-3.65-.9-5.44-.88m-11-.53Q3.5 10.55 3.5 12q0 .26.02.5.87-.95 1.93-1.71-.6-.87-1.5-1.54m4.53-5c-1.5.7-2.77 1.8-3.66 3.18.9.6 1.71 1.38 2.32 2.3q.75-.41 1.56-.74c-.27-1.61-.37-3.22-.22-4.73M12 3.5q-.72 0-1.4.12c-.26 1.42-.23 3.04.03 4.74q.84-.22 1.7-.36-.1-1.63.64-2.9.45-.77 1.08-1.35-.99-.25-2.05-.25m4.18 1.1q-.99.66-1.47 1.49-.43.7-.39 1.71 2.66-.12 5.36.56c-.75-1.58-1.98-2.9-3.5-3.76" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballBold.displayName = 'BasketballBold';

// Triple export pattern
export { BasketballBold, BasketballBold as BasketballBoldIcon, BasketballBold as SiBasketballBold };
export default BasketballBold;
export type { BasketballBoldProps };
