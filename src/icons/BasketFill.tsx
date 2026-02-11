import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketFillProps = Omit<IconBaseProps, 'children'>;

const BasketFill = memo(
  forwardRef<SVGSVGElement, BasketFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="basket-fill" {...props}>
      <path fillRule="evenodd" d="M11.4 2.7a1 1 0 0 1 1.28.06L18.39 8h.3q.7 0 1.2.03c.29.03.62.08.94.25l.13.08.18.12q.6.48.8 1.24c.1.4.03.8-.05 1.12q-.13.49-.36 1.14l-1.77 5.11c-.37 1.09-.63 1.9-1.15 2.5a4 4 0 0 1-1.6 1.14c-.74.29-1.58.27-2.73.27H9.72c-1.15 0-2 .02-2.73-.27a4 4 0 0 1-1.6-1.14c-.52-.6-.78-1.41-1.15-2.5l-1.77-5.11q-.23-.65-.36-1.14a2.3 2.3 0 0 1-.04-1.12l.06-.2q.26-.74.9-1.16c.36-.23.75-.3 1.08-.33q.5-.04 1.2-.03h.3l5.71-5.24zm-2.94 9.53a1 1 0 0 0-1.92.54l1 3.5a1 1 0 0 0 1.92-.54zM12 11.5a1 1 0 0 0-1 1V16a1 1 0 0 0 2 0v-3.5a1 1 0 0 0-1-1m4.77.04a1 1 0 0 0-1.23.69l-1 3.5a1 1 0 0 0 1.92.54l1-3.5a1 1 0 0 0-.69-1.23M8.57 8h6.86L12 4.86z" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketFill.displayName = 'BasketFill';

// Triple export pattern (lucide-react style)
export { BasketFill, BasketFill as BasketFillIcon, BasketFill as SiBasketFill };
export default BasketFill;
export type { BasketFillProps };
