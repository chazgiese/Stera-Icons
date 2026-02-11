import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketRegularProps = Omit<IconBaseProps, 'children'>;

const BasketRegular = memo(
  forwardRef<SVGSVGElement, BasketRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="basket" {...props}>
      <path d="M12 11.75c.41 0 .75.34.75.75V16a.75.75 0 0 1-1.5 0v-3.5c0-.41.34-.75.75-.75M7.3 11.78c.4-.11.8.12.92.51l1 3.5a.75.75 0 1 1-1.44.42l-1-3.5a.75.75 0 0 1 .51-.93M15.78 12.3a.75.75 0 1 1 1.44.4l-1 3.5a.75.75 0 1 1-1.44-.4z" />
        <path fillRule="evenodd" d="M11.5 2.95a.75.75 0 0 1 1 0l5.8 5.3h.4q.68 0 1.16.03.5.03.97.29a2 2 0 0 1 .86 1.2c.08.36.04.7-.04 1.01q-.12.46-.36 1.12L19.53 17c-.39 1.1-.63 1.85-1.1 2.42q-.63.72-1.5 1.06c-.7.27-1.48.26-2.65.26H9.72c-1.17 0-1.96.01-2.64-.26q-.88-.34-1.5-1.06c-.48-.57-.72-1.31-1.1-2.42L2.7 11.9q-.23-.65-.36-1.12a2 2 0 0 1-.04-1 2 2 0 0 1 .86-1.21c.3-.2.65-.26.97-.3q.46-.03 1.17-.02h.4zm-6.2 6.8q-.7 0-1.03.02c-.22.02-.28.06-.29.06a.5.5 0 0 0-.21.3s-.02.07.04.3.16.52.32.98l1.76 5.11c.42 1.23.58 1.64.83 1.94q.37.43.9.64c.36.14.8.15 2.1.15h4.56c1.3 0 1.74-.01 2.1-.15q.53-.21.9-.64c.25-.3.4-.71.83-1.94l1.77-5.11c.15-.46.26-.76.31-.99.06-.22.04-.28.04-.29a.5.5 0 0 0-.21-.3c-.01 0-.07-.04-.29-.06q-.33-.02-1.04-.02zm2.63-1.5h8.14L12 4.52z" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketRegular.displayName = 'BasketRegular';

// Triple export pattern (lucide-react style)
export { BasketRegular, BasketRegular as BasketRegularIcon, BasketRegular as SiBasketRegular };
export default BasketRegular;
export type { BasketRegularProps };
