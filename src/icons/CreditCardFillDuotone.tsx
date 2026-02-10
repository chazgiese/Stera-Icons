import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CreditCardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CreditCardFillDuotone = memo(
  forwardRef<SVGSVGElement, CreditCardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M22 14.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-3.7h20zm-11.5.43a.88.88 0 0 0 0 1.74h1a.87.87 0 1 0 0-1.75zm4 0a.88.88 0 0 0 0 1.74h3a.87.87 0 1 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57l.03.75H2.01q0-.4.03-.75a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" opacity={0.4} />
        <path fill="currentColor" d="M11.5 14.63a.88.88 0 0 1 0 1.74h-1a.88.88 0 0 1 0-1.75zM17.5 14.63a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.75zM22 10.5H2v-2h20z" />
    </IconBase>
  ))
);

CreditCardFillDuotone.displayName = 'CreditCardFillDuotone';

// Triple export pattern (lucide-react style)
export { CreditCardFillDuotone, CreditCardFillDuotone as CreditCardFillDuotoneIcon, CreditCardFillDuotone as SiCreditCardFillDuotone };
export default CreditCardFillDuotone;
export type { CreditCardFillDuotoneProps };
