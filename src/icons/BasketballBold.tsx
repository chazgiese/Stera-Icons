import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldProps = Omit<IconBaseProps, 'children'>;

const BasketballBold = memo(
  forwardRef<SVGSVGElement, BasketballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a9.97 9.97 0 0 1 10 10 10 10 0 0 1-6.34 9.31 10 10 0 0 1-9.19-.97A10 10 0 0 1 3.04 7.56 10 10 0 0 1 12 2m-2.74 9.1q-.5.22-.97.48.16.57.21 1.18c.08 1.28-.09 2.48-.24 3.56-.13.92-.25 1.76-.25 2.62a8 8 0 0 0 5.5.92 25 25 0 0 1-4.25-8.75m3.47-.98q-.8.12-1.58.33a22 22 0 0 0 4.4 8.72 8 8 0 0 0 3.2-2.89c-.6-.59-1.3-1.15-2.02-1.74-1.46-1.18-3.18-2.53-4-4.42M6.5 12.77q-1.13.92-1.96 2.1A8 8 0 0 0 6.1 17.4q.08-.71.18-1.36c.15-1.11.3-2.1.22-3.15zm8.41-2.82c.65 1.04 1.75 1.96 3.08 3.03q.82.66 1.66 1.4a8 8 0 0 0 .26-3.61 16 16 0 0 0-5-.82M4.4 9.48a8 8 0 0 0-.4 2.87q.79-.83 1.73-1.51A6 6 0 0 0 4.4 9.48m4.22-4.73a8 8 0 0 0-3.34 2.9 8 8 0 0 1 2.14 2.12q.69-.36 1.4-.65a17 17 0 0 1-.2-4.37M12 4q-.66 0-1.28.1c-.23 1.32-.2 2.81.03 4.39q.75-.2 1.5-.32a4.8 4.8 0 0 1 .63-2.74q.4-.68.95-1.22A8 8 0 0 0 12 4m3.97 1.05a4 4 0 0 0-1.36 1.37q-.39.63-.36 1.55 2.44-.1 4.93.5a8 8 0 0 0-3.21-3.42" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballBold.displayName = 'BasketballBold';

// Triple export pattern (lucide-react style)
export { BasketballBold, BasketballBold as BasketballBoldIcon, BasketballBold as SiBasketballBold };
export default BasketballBold;
export type { BasketballBoldProps };
