import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldProps = Omit<IconBaseProps, 'children'>;

const BasketballBold = memo(
  forwardRef<SVGSVGElement, BasketballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a10.96 10.96 0 0 1 11 11 11 11 0 0 1-6.98 10.24 11 11 0 0 1-10.1-1.07A11 11 0 0 1 2.14 7.12 11 11 0 0 1 12 1m-2.97 9.85q-.67.3-1.29.63.21.66.26 1.37c.1 1.41-.1 2.73-.27 3.93-.15 1.04-.28 2-.27 2.99a9 9 0 0 0 6.42 1.03 27 27 0 0 1-4.85-9.95m3.85-1.06q-1 .15-1.96.4c.93 3.75 2.8 7.45 4.99 9.92a9 9 0 0 0 3.74-3.37q-1.06-1-2.33-2c-1.64-1.34-3.56-2.84-4.44-4.95m-6.91 2.86q-1.4 1.09-2.4 2.52a9 9 0 0 0 1.96 3.08q.1-.9.22-1.75a17 17 0 0 0 .22-3.85m9.06-3.03c.72 1.25 2 2.31 3.55 3.56q.98.77 1.96 1.65a9 9 0 0 0 .34-4.29 17 17 0 0 0-5.85-.92M3.5 9.02a9 9 0 0 0-.49 3.64q.98-1.08 2.16-1.93a7 7 0 0 0-1.67-1.7m4.86-5.26A9 9 0 0 0 4.39 7.2a9 9 0 0 1 2.49 2.47q.83-.45 1.72-.8c-.3-1.74-.4-3.48-.23-5.1m8.03.39q-1.06.7-1.6 1.6c-.3.52-.46 1.13-.4 1.89q2.87-.15 5.78.6a9 9 0 0 0-3.78-4.09M12 3q-.78 0-1.52.13c-.28 1.52-.25 3.27.04 5.1q.93-.24 1.89-.4-.13-1.73.66-3.07.49-.83 1.2-1.47A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballBold.displayName = 'BasketballBold';

// Triple export pattern (lucide-react style)
export { BasketballBold, BasketballBold as BasketballBoldIcon, BasketballBold as SiBasketballBold };
export default BasketballBold;
export type { BasketballBoldProps };
