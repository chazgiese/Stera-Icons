import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularProps = Omit<IconBaseProps, 'children'>;

const BasketballRegular = memo(
  forwardRef<SVGSVGElement, BasketballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A9.7 9.7 0 0 1 21.75 12a9.7 9.7 0 0 1-6.18 9.08 9.7 9.7 0 0 1-8.96-.95A9.8 9.8 0 0 1 3.26 7.68 9.8 9.8 0 0 1 12 2.25m-2.58 8.51q-.74.3-1.43.7.21.63.26 1.31c.08 1.26-.09 2.43-.24 3.51-.14.97-.27 1.87-.25 2.8a8.2 8.2 0 0 0 6.2.94 24 24 0 0 1-4.54-9.26m3.47-.92q-1.05.15-2.04.43a22 22 0 0 0 4.63 9.21 8.3 8.3 0 0 0 3.6-3.24q-1-.96-2.2-1.9c-1.52-1.22-3.24-2.59-3.99-4.5m-6.22 2.47q-1.43 1.08-2.42 2.53a8 8 0 0 0 2.05 3.12q.09-.98.22-1.89c.16-1.1.3-2.12.23-3.2a4 4 0 0 0-.08-.56m7.8-2.6c.65 1.26 1.9 2.28 3.36 3.46.63.52 1.3 1.06 1.92 1.64a8 8 0 0 0 .38-4.23c-1.87-.65-3.8-.93-5.66-.87M4.28 9.1a8 8 0 0 0-.48 3.86q1-1.16 2.27-2.05a6 6 0 0 0-1.79-1.81m4.63-4.74a8.3 8.3 0 0 0-3.97 3.38c.94.6 1.8 1.42 2.4 2.37a15 15 0 0 1 1.77-.82c-.3-1.7-.4-3.38-.2-4.93m7.05.41q-1.06.67-1.57 1.54c-.3.53-.46 1.16-.37 1.93 1.84-.1 3.74.1 5.6.62a8.3 8.3 0 0 0-3.66-4.09M12 3.75a8 8 0 0 0-1.5.14 14 14 0 0 0 .04 4.9q.97-.26 1.99-.41c-.12-1.07.1-2 .56-2.83q.5-.83 1.26-1.46A8 8 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballRegular.displayName = 'BasketballRegular';

// Triple export pattern (lucide-react style)
export { BasketballRegular, BasketballRegular as BasketballRegularIcon, BasketballRegular as SiBasketballRegular };
export default BasketballRegular;
export type { BasketballRegularProps };
