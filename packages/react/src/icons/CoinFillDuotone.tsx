import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinFillDuotone = memo(
  forwardRef<SVGSVGElement, CoinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1 10c0 .9.6 1.55 1.2 1.98q.36.26.8.47v1.53c0 .03.06.16.36.37q.4.29 1.14.57v-1.89l.14.05q.85.26 1.86.44v1.96q.92.2 2 .32v-1.98q.96.1 2 .15v2a32 32 0 0 0 3 0v-2q1.04-.04 2-.15v1.98q1.08-.12 2-.32v-1.96q1.01-.18 1.86-.44l.14-.05v1.89q.74-.29 1.14-.57c.3-.21.35-.34.36-.37v-1.53q.45-.21.8-.47c.6-.43 1.2-1.08 1.2-1.98v4c0 .9-.6 1.55-1.2 1.98a9 9 0 0 1-2.44 1.1c-1.93.58-4.53.92-7.36.92s-5.43-.34-7.36-.92a9 9 0 0 1-2.43-1.1C1.6 15.55 1 14.9 1 14z" opacity={.4} />
        <path fill="currentColor" d="M12 6c2.83 0 5.43.34 7.36.92.96.29 1.8.65 2.43 1.1C22.4 8.45 23 9.1 23 10s-.6 1.55-1.2 1.98a9 9 0 0 1-2.44 1.1c-1.93.58-4.53.92-7.36.92s-5.43-.34-7.36-.92a9 9 0 0 1-2.43-1.1C1.6 11.55 1 10.9 1 10s.6-1.55 1.2-1.98a9 9 0 0 1 2.44-1.1C6.57 6.34 9.17 6 12 6" />
    </IconBase>
  ))
);

CoinFillDuotone.displayName = 'CoinFillDuotone';

// Triple export pattern (lucide-react style)
export { CoinFillDuotone, CoinFillDuotone as CoinFillDuotoneIcon, CoinFillDuotone as SiCoinFillDuotone };
export type { CoinFillDuotoneProps };
