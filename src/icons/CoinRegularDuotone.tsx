import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinRegularDuotone = memo(
  forwardRef<SVGSVGElement, CoinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin-duotone" {...props}>
      <path fill="currentColor" d="M1.25 10c0 .78.52 1.37 1.1 1.78l.4.25V14c0 .05.04.25.47.56q.53.37 1.53.72v-2.43q.69.2 1.5.37v2.47q1.14.25 2.5.39v-2.49q.73.08 1.5.11v2.5a32 32 0 0 0 3.5 0v-2.5q.77-.04 1.5-.1v2.48q1.36-.15 2.5-.4v-2.46q.81-.16 1.5-.37v2.43a6 6 0 0 0 1.53-.72c.43-.31.47-.5.47-.56v-1.97l.4-.25c.58-.41 1.1-1 1.1-1.78v4c0 .78-.52 1.37-1.1 1.78-.6.42-1.42.78-2.36 1.06-1.9.57-4.48.91-7.29.91s-5.39-.34-7.29-.91a8 8 0 0 1-2.36-1.06c-.58-.41-1.1-1-1.1-1.78z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.25c2.81 0 5.39.34 7.29.91.94.28 1.76.64 2.36 1.06.58.41 1.1 1 1.1 1.78s-.52 1.37-1.1 1.78c-.6.42-1.42.78-2.36 1.06-1.9.57-4.48.91-7.29.91s-5.39-.34-7.29-.91a8 8 0 0 1-2.36-1.06c-.58-.41-1.1-1-1.1-1.78s.52-1.37 1.1-1.78c.6-.42 1.42-.78 2.36-1.06 1.9-.57 4.48-.91 7.29-.91m0 1.5c-2.7 0-5.13.33-6.86.85q-1.29.4-1.92.84c-.43.31-.47.5-.47.56 0 .05.04.25.47.56q.62.44 1.92.84c1.73.52 4.15.85 6.86.85s5.13-.33 6.86-.85a7 7 0 0 0 1.92-.84c.43-.31.47-.5.47-.56 0-.05-.04-.25-.47-.56a7 7 0 0 0-1.92-.84A25 25 0 0 0 12 7.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinRegularDuotone.displayName = 'CoinRegularDuotone';

// Triple export pattern (lucide-react style)
export { CoinRegularDuotone, CoinRegularDuotone as CoinRegularDuotoneIcon, CoinRegularDuotone as SiCoinRegularDuotone };
export default CoinRegularDuotone;
export type { CoinRegularDuotoneProps };
