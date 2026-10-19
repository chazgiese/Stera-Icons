import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BasketballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.58 3.62c-.25 1.42-.22 3.03.04 4.73q.85-.22 1.72-.36c-.09-1.1.15-2.07.64-2.92q.43-.75 1.05-1.32 1.14.28 2.13.84-.96.66-1.45 1.47c-.27.48-.43 1.04-.38 1.73 1.75-.08 3.56.1 5.34.55q.52 1.07.72 2.3c-1.8-.61-3.64-.89-5.42-.87.69 1.15 1.9 2.15 3.33 3.32q.9.7 1.8 1.5-.33 1.02-.89 1.91-.98-.93-2.16-1.86c-1.56-1.26-3.39-2.7-4.24-4.7q-.9.13-1.78.37c.88 3.52 2.63 7 4.68 9.34q-.95.46-2.03.68c-2.02-2.52-3.66-5.93-4.55-9.36q-.59.25-1.14.55.2.63.24 1.29c.09 1.35-.1 2.61-.26 3.76-.14.97-.26 1.86-.26 2.77Q6.65 18.7 5.8 17.8q.08-.8.2-1.52c.16-1.18.3-2.24.23-3.35l-.02-.24q-1.27 1-2.17 2.3-.45-1.2-.53-2.52.89-.95 1.92-1.7-.6-.87-1.48-1.52.34-.97.88-1.83c.9.6 1.7 1.39 2.3 2.29q.76-.4 1.57-.74c-.27-1.6-.37-3.2-.22-4.71q.99-.45 2.1-.65" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballBoldDuotone.displayName = 'BasketballBoldDuotone';

// Triple export pattern
export { BasketballBoldDuotone, BasketballBoldDuotone as BasketballBoldDuotoneIcon, BasketballBoldDuotone as SiBasketballBoldDuotone };
export default BasketballBoldDuotone;
export type { BasketballBoldDuotoneProps };
