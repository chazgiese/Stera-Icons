import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CreditCardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CreditCardFillDuotone = memo(
  forwardRef<SVGSVGElement, CreditCardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M23 15.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V10h22zM11 15a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={0.4} />
        <path d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57Q23 7.29 23 8H1q0-.72.04-1.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" opacity={0.4} />
        <path fill="currentColor" d="M12 15a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM18 15a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM23 10H1V8h22z" />
    </IconBase>
  ))
);

CreditCardFillDuotone.displayName = 'CreditCardFillDuotone';

// Triple export pattern (lucide-react style)
export { CreditCardFillDuotone, CreditCardFillDuotone as CreditCardFillDuotoneIcon, CreditCardFillDuotone as SiCreditCardFillDuotone };
export default CreditCardFillDuotone;
export type { CreditCardFillDuotoneProps };
