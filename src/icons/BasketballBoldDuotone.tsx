import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BasketballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M10.71 4.1c-.22 1.32-.2 2.81.04 4.39q.75-.2 1.5-.32a4.8 4.8 0 0 1 .63-2.74q.4-.68.95-1.22 1.15.28 2.14.84a4 4 0 0 0-1.36 1.37q-.39.63-.36 1.55 2.45-.1 4.93.5.53 1.08.73 2.3a16 16 0 0 0-5.01-.82c.65 1.04 1.75 1.96 3.08 3.03q.82.66 1.66 1.4a8 8 0 0 1-.88 1.9q-.92-.87-2.03-1.74c-1.46-1.18-3.18-2.53-4-4.42q-.8.12-1.58.33c.84 3.3 2.48 6.54 4.4 8.72q-.96.48-2.04.69a25 25 0 0 1-4.25-8.75q-.5.21-.97.47.16.57.2 1.18c.1 1.28-.08 2.48-.23 3.56-.13.92-.25 1.76-.25 2.61A8 8 0 0 1 6.1 17.4q.08-.71.18-1.36c.15-1.11.3-2.1.22-3.15v-.12q-1.14.92-1.97 2.1a8 8 0 0 1-.52-2.52q.79-.83 1.72-1.51A6 6 0 0 0 4.4 9.48q.31-.97.88-1.83a8 8 0 0 1 2.13 2.12q.69-.36 1.4-.65a17 17 0 0 1-.2-4.37q.98-.46 2.1-.65" />
    </IconBase>
  ))
);

BasketballBoldDuotone.displayName = 'BasketballBoldDuotone';

// Triple export pattern (lucide-react style)
export { BasketballBoldDuotone, BasketballBoldDuotone as BasketballBoldDuotoneIcon, BasketballBoldDuotone as SiBasketballBoldDuotone };
export default BasketballBoldDuotone;
export type { BasketballBoldDuotoneProps };
