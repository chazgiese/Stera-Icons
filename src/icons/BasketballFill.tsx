import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballFillProps = Omit<IconBaseProps, 'children'>;

const BasketballFill = memo(
  forwardRef<SVGSVGElement, BasketballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-fill" {...props}>
      <path fill="currentColor" d="M9.25 11.1a25 25 0 0 0 3.87 8.25q.9 1.21 1.92 2.18a10 10 0 0 1-6.65-.2 8.5 8.5 0 0 1-.3-3.8c.16-1.38.52-3.05.4-4.77q-.04-.6-.2-1.18.47-.26.96-.47M12.73 10.12c.38.88.95 1.62 1.57 2.28.83.87 1.82 1.65 2.72 2.37 1.28 1.04 2.38 2 3.06 3.13q-1.23 1.66-3.02 2.73a13 13 0 0 1-2.33-2.47 22 22 0 0 1-3.58-7.71q.78-.21 1.58-.33M6.5 12.89c.1 1.49-.2 2.76-.4 4.42-.09.87-.14 1.77-.03 2.74-1.08-.8-2-1.8-2.68-2.97a10 10 0 0 1 3.1-4.3zM14.9 9.95c2.36 0 4.8.53 7.1 1.7V12c0 1.42-.3 2.76-.82 3.98a18 18 0 0 0-2.9-2.76c-.95-.77-1.82-1.45-2.53-2.2q-.5-.52-.85-1.07M2.61 8.54a6 6 0 0 1 3.12 2.3c-1.38 1-2.54 2.27-3.39 3.75a10 10 0 0 1 .27-6.05M9.06 2.44c-.35 1.13-.5 2.36-.5 3.61q0 1.5.27 3.07-.73.3-1.4.65-.56-.8-1.26-1.42A8 8 0 0 0 3.5 6.73a10 10 0 0 1 5.56-4.3M18.02 4.02c1.72 1.3 3 3.13 3.6 5.25-2.41-.99-4.94-1.4-7.37-1.3a3 3 0 0 1 .18-1.16q.3-.78 1.1-1.43c.67-.55 1.54-1 2.5-1.36M12 2q2.09.02 3.89.78-.89.45-1.64 1.06a5.5 5.5 0 0 0-1.69 2.25 5 5 0 0 0-.3 2.08q-.77.12-1.51.32-.2-1.26-.2-2.43 0-2.37.83-4.04z" />
    </IconBase>
  ))
);

BasketballFill.displayName = 'BasketballFill';

// Triple export pattern (lucide-react style)
export { BasketballFill, BasketballFill as BasketballFillIcon, BasketballFill as SiBasketballFill };
export default BasketballFill;
export type { BasketballFillProps };
