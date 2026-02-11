import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketBoldDuotone = memo(
  forwardRef<SVGSVGElement, BasketBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="basket-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M18.7 8q.68 0 1.19.03c.29.03.62.08.94.25l.13.08.18.12q.6.49.8 1.24c.1.4.03.8-.05 1.12q-.13.49-.36 1.14l-1.77 5.11c-.37 1.09-.63 1.9-1.15 2.5a4 4 0 0 1-1.6 1.14c-.74.29-1.58.27-2.73.27H9.72c-1.15 0-2 .02-2.74-.27a4 4 0 0 1-1.6-1.14c-.5-.6-.77-1.41-1.14-2.5l-1.77-5.11q-.23-.65-.36-1.14a2.3 2.3 0 0 1-.04-1.12l.06-.2q.25-.74.9-1.16c.36-.23.75-.3 1.08-.33q.5-.04 1.2-.03zM5.3 10a13 13 0 0 0-1.2.05.3.3 0 0 0-.08.13q0 .03.03.18c.05.22.15.5.31.97l1.77 5.11c.43 1.24.57 1.6.78 1.85a2 2 0 0 0 .8.57c.3.12.7.14 2 .14h4.57c1.31 0 1.7-.02 2-.14a2 2 0 0 0 .8-.57c.22-.25.36-.6.8-1.85l1.76-5.11a13 13 0 0 0 .34-1.15.3.3 0 0 0-.09-.13l-.18-.03a13 13 0 0 0-1.02-.02z" clipRule="evenodd" opacity={.4} />
        <path d="M7.23 11.54a1 1 0 0 1 1.23.69l1 3.5a1 1 0 0 1-1.92.54l-1-3.5a1 1 0 0 1 .69-1.23M12 11.5a1 1 0 0 1 1 1V16a1 1 0 0 1-2 0v-3.5a1 1 0 0 1 1-1M15.54 12.23a1 1 0 0 1 1.92.54l-1 3.5a1 1 0 0 1-1.92-.54zM11.4 2.7a1 1 0 0 1 1.28.06L18.39 8h-2.96L12 4.86 8.57 8H5.61l5.71-5.24z" />
    </IconBase>
  ))
);

BasketBoldDuotone.displayName = 'BasketBoldDuotone';

// Triple export pattern (lucide-react style)
export { BasketBoldDuotone, BasketBoldDuotone as BasketBoldDuotoneIcon, BasketBoldDuotone as SiBasketBoldDuotone };
export default BasketBoldDuotone;
export type { BasketBoldDuotoneProps };
