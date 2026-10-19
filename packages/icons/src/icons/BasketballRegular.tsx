import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularProps = Omit<IconBaseProps, 'children'>;

const BasketballRegular = memo(
  forwardRef<SVGSVGElement, BasketballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c1.6 0 3.12.37 4.47 1.02 2.77 1.35 4.84 3.9 5.53 6.97q.25 1.1.25 2.26c0 1.7-.41 3.3-1.14 4.7-1.14 2.2-3.04 3.93-5.36 4.84q-1.76.7-3.75.71c-2.1 0-4.04-.63-5.66-1.7-1.93-1.28-3.4-3.2-4.11-5.44q-.47-1.48-.48-3.11c0-1.63.38-3.18 1.06-4.55 1.33-2.67 3.8-4.7 6.77-5.41q1.16-.29 2.42-.29m-2.69 8.89q-.83.33-1.6.77.24.68.29 1.4c.09 1.33-.1 2.56-.25 3.7-.15 1.03-.28 2-.26 2.99 1.31.8 2.86 1.25 4.51 1.25q1.12 0 2.14-.27c-2.16-2.57-3.93-6.21-4.83-9.84m3.65-.96q-1.14.15-2.22.47c.89 3.7 2.74 7.39 4.92 9.8 1.61-.75 2.96-1.96 3.86-3.48q-1.06-1.03-2.34-2.03c-1.61-1.3-3.43-2.74-4.22-4.76M6.4 12.26q-1.55 1.15-2.63 2.73.73 1.97 2.25 3.4.09-1.09.24-2.09c.17-1.16.32-2.24.24-3.38q-.02-.33-.1-.66m14.21-1.8c-2-.7-4.07-.99-6.06-.92.67 1.36 2.01 2.47 3.57 3.73q1.06.83 2.08 1.78.55-1.44.55-3.05 0-.79-.14-1.53M3.83 8.87q-.57 1.47-.58 3.14 0 .56.07 1.1 1.09-1.28 2.47-2.25c-.48-.78-1.17-1.46-1.96-1.99m4.96-5c-1.8.71-3.31 2-4.3 3.64 1.02.65 1.93 1.52 2.58 2.55q.92-.51 1.92-.9c-.32-1.82-.42-3.63-.2-5.29m7.38.45q-1.12.71-1.68 1.65c-.33.58-.5 1.26-.4 2.1 1.98-.11 4.02.1 6.03.68-.76-1.9-2.17-3.46-3.95-4.43M12 3.25q-.83 0-1.62.15c-.3 1.57-.27 3.38.05 5.27q1.05-.3 2.17-.46c-.13-1.13.1-2.13.59-3q.54-.9 1.37-1.58-1.21-.37-2.56-.38" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballRegular.displayName = 'BasketballRegular';

// Triple export pattern
export { BasketballRegular, BasketballRegular as BasketballRegularIcon, BasketballRegular as SiBasketballRegular };
export default BasketballRegular;
export type { BasketballRegularProps };
