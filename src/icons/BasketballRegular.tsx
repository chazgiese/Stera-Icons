import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularProps = Omit<IconBaseProps, 'children'>;

const BasketballRegular = memo(
  forwardRef<SVGSVGElement, BasketballRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A10.7 10.7 0 0 1 22.75 12a10.7 10.7 0 0 1-6.82 10 10.7 10.7 0 0 1-9.87-1.04 10.8 10.8 0 0 1-3.7-13.73A10.8 10.8 0 0 1 12 1.25m-2.8 9.26q-.92.37-1.76.85.26.73.31 1.5c.1 1.39-.1 2.68-.27 3.89a19 19 0 0 0-.27 3.16 9.2 9.2 0 0 0 7.11 1.04A26.6 26.6 0 0 1 9.2 10.51m3.84-1q-1.25.16-2.42.51c.94 3.93 2.9 7.84 5.23 10.4a9.3 9.3 0 0 0 4.11-3.72c-.73-.75-1.6-1.44-2.48-2.16-1.71-1.38-3.63-2.9-4.44-5.03m-6.9 2.7q-1.7 1.23-2.84 2.93a9 9 0 0 0 2.44 3.66q.08-1.18.26-2.26c.17-1.23.33-2.37.25-3.58q-.02-.37-.12-.75m14.96-1.85a18 18 0 0 0-6.48-.98c.7 1.47 2.14 2.65 3.8 4 .74.59 1.52 1.21 2.23 1.9a9 9 0 0 0 .45-4.92M3.38 8.64a9 9 0 0 0-.54 4.62 14 14 0 0 1 2.68-2.46 7 7 0 0 0-2.14-2.16m5.29-5.27a9.3 9.3 0 0 0-4.62 3.9A9 9 0 0 1 6.79 10q1-.56 2.09-.97a18 18 0 0 1-.21-5.66m7.72.49q-1.21.76-1.8 1.77a3.5 3.5 0 0 0-.42 2.27c2.11-.13 4.3.1 6.44.73a9.3 9.3 0 0 0-4.22-4.77M12 2.75q-.9 0-1.74.16c-.33 1.68-.29 3.62.06 5.64q1.14-.33 2.36-.5c-.15-1.2.08-2.26.6-3.17q.59-.99 1.5-1.7A9 9 0 0 0 12 2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballRegular.displayName = 'BasketballRegular';

// Triple export pattern (lucide-react style)
export { BasketballRegular, BasketballRegular as BasketballRegularIcon, BasketballRegular as SiBasketballRegular };
export default BasketballRegular;
export type { BasketballRegularProps };
