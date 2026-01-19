import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BasketballFillProps = Omit<IconBaseProps, 'children'>;

const BasketballFill = memo(
  forwardRef<SVGSVGElement, BasketballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-fill" {...props}>
      <path fill="currentColor" d="M7.72 9.37c.57 2.5 1.7 6.94 6.11 12.48q.38.47.78.83a11 11 0 0 1-7.34-.75q-.32-.65-.72-1.59c-.9-2.13-.6-4.12-.5-5.59.03-.46.14-1.18.23-2.09a17 17 0 0 0 .07-3.06q.65-.52 1.24-.85zM10.9 7.4a6.3 6.3 0 0 0 1.97 2.65c.88.76 1.86 1.37 2.47 1.76.75.5 2.07 1.26 3.3 2.27 1.26 1.03 2.22 2.16 2.4 3.26l.02.06.01.05q.05.14.1.63a11 11 0 0 1-4.87 4.05c-.42-.3-.89-.7-1.3-1.21-4.21-5.3-5.28-9.52-5.82-11.88l-.2-.97q.96-.4 1.91-.67M4.9 10.87q-.02.78-.11 1.64c-.09.8-.2 1.66-.23 2.14-.09 1.25-.42 3.46.44 5.83a11 11 0 0 1-3.47-5.1c.28-.63.7-1.41 1.29-2.2.55-.73 1.29-1.55 2.08-2.31M12.36 7.07a14.8 14.8 0 0 1 10.26 2.08 11 11 0 0 1-.4 6.93 9 9 0 0 0-2.63-3.16c-1.32-1.08-2.79-1.94-3.43-2.37h-.01l-.01-.01-.52-.33c-.54-.35-1.19-.79-1.78-1.3a5 5 0 0 1-1.48-1.84M2.34 7.49c.58 0 1.15.03 1.44.13.38.12.74.49.95 1.37a21 21 0 0 0-3.68 4.1 11 11 0 0 1 .92-5.6zM8.14 1.7q-.24.52-.45 1.2a11 11 0 0 0-.34 4.27l-.03.01A10 10 0 0 0 6 8a2.8 2.8 0 0 0-1.74-1.8 6 6 0 0 0-1.46-.2 11 11 0 0 1 5.35-4.3M17.59 2.53a11 11 0 0 1 4.17 4.4q-.45-.2-1-.41a16.3 16.3 0 0 0-8.55-.95q.05-.41.23-.8c.3-.66.92-1.32 2.14-1.73a10 10 0 0 1 3-.51M12 1q1.5 0 2.9.39l-.8.23a4.8 4.8 0 0 0-3.02 2.52c-.27.58-.39 1.2-.4 1.77q-.94.24-1.88.62a8.6 8.6 0 0 1 1.33-5.37Q11.04 1.01 12 1" />
    </IconBase>
  ))
);

BasketballFill.displayName = 'BasketballFill';

// Triple export pattern (lucide-react style)
export { BasketballFill, BasketballFill as BasketballFillIcon, BasketballFill as SiBasketballFill };
export default BasketballFill;
export type { BasketballFillProps };
