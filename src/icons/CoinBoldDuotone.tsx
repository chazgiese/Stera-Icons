import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin-bold-duotone" {...props}>
      <path d="M1 10c0 .9.6 1.55 1.2 1.98q.36.26.8.47v1.53c0 .03.06.16.36.37q.4.29 1.14.57v-1.89l.14.05q.85.26 1.86.44v1.96q.92.2 2 .32v-1.98q.96.1 2 .15v2a32 32 0 0 0 3 0v-2q1.04-.04 2-.15v1.98q1.08-.12 2-.32v-1.96q1.01-.18 1.86-.44l.14-.05v1.89q.74-.29 1.14-.57c.3-.21.35-.34.36-.37v-1.53q.45-.21.8-.47c.6-.43 1.2-1.08 1.2-1.98v4c0 .9-.6 1.55-1.2 1.98a9 9 0 0 1-2.44 1.1c-1.93.58-4.53.92-7.36.92s-5.43-.34-7.36-.92a9 9 0 0 1-2.43-1.1C1.6 15.55 1 14.9 1 14z" opacity={.4} />
        <path fillRule="evenodd" d="M12 6c2.83 0 5.43.34 7.36.92.96.29 1.8.65 2.43 1.1C22.4 8.45 23 9.1 23 10s-.6 1.55-1.2 1.98a9 9 0 0 1-2.44 1.1c-1.93.58-4.53.92-7.36.92s-5.43-.34-7.36-.92a9 9 0 0 1-2.43-1.1C1.6 11.55 1 10.9 1 10s.6-1.55 1.2-1.98a9 9 0 0 1 2.44-1.1C6.57 6.34 9.17 6 12 6m0 2c-2.7 0-5.1.33-6.78.84a7 7 0 0 0-1.86.8c-.26.2-.33.32-.35.36.02.04.1.17.35.35q.58.42 1.86.81C6.9 11.67 9.3 12 12 12s5.1-.33 6.78-.84a7 7 0 0 0 1.86-.8c.26-.2.33-.31.35-.36-.02-.05-.1-.17-.35-.35a7 7 0 0 0-1.86-.81C17.1 8.33 14.7 8 12 8" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinBoldDuotone.displayName = 'CoinBoldDuotone';

// Triple export pattern (lucide-react style)
export { CoinBoldDuotone, CoinBoldDuotone as CoinBoldDuotoneIcon, CoinBoldDuotone as SiCoinBoldDuotone };
export default CoinBoldDuotone;
export type { CoinBoldDuotoneProps };
