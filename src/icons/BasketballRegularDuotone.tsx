import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BasketballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BasketballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="basketball-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.18 3.57q.75-.33 1.57-.54Q9.6 4 9.63 5.1q.04 1.7.41 3.53 1.29-.39 2.64-.58-.16-1.35.28-2.48c.36-.96 1-1.73 1.77-2.36l.05-.04q.84.27 1.61.69-.37.24-.7.5a4 4 0 0 0-1.33 1.74q-.31.76-.19 1.8c2.11-.13 4.3.1 6.45.73q.32.83.48 1.73a18 18 0 0 0-6.48-.98q.46.94 1.29 1.78a26 26 0 0 0 2.84 2.48c.63.5 1.29 1.05 1.9 1.64q-.29.75-.68 1.43a26 26 0 0 0-2.17-1.9q-.15-.14-.32-.27c-.91-.74-1.86-1.5-2.66-2.34a8 8 0 0 1-1.78-2.69q-1.36.19-2.65.58.3 1.14.73 2.27c.9 2.44 2.14 4.77 3.54 6.64q.57.77 1.18 1.42-.74.33-1.53.54-.44-.52-.85-1.06a28 28 0 0 1-4.48-9.3q-.8.34-1.54.76.26.73.31 1.5c.1 1.38-.1 2.72-.28 3.96L7.3 18.1q-.1.9-.1 1.8a9 9 0 0 1-1.46-1.1q.02-.44.07-.87l.2-1.47c.17-1.2.32-2.3.24-3.5q-.01-.39-.12-.76c-1.11.82-2.08 1.8-2.83 2.93a9 9 0 0 1-.47-1.88q1.18-1.41 2.7-2.46a7 7 0 0 0-2.15-2.17q.28-.7.66-1.35A9 9 0 0 1 6.8 10q.88-.5 1.83-.87-.45-2.04-.49-4-.01-.8.05-1.56" />
    </IconBase>
  ))
);

BasketballRegularDuotone.displayName = 'BasketballRegularDuotone';

// Triple export pattern (lucide-react style)
export { BasketballRegularDuotone, BasketballRegularDuotone as BasketballRegularDuotoneIcon, BasketballRegularDuotone as SiBasketballRegularDuotone };
export default BasketballRegularDuotone;
export type { BasketballRegularDuotoneProps };
