import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CreditCardAltFillProps = Omit<IconBaseProps, 'children'>;

const CreditCardAltFill = memo(
  forwardRef<SVGSVGElement, CreditCardAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-alt-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22 14.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-3.7h20zM6.25 13.13c-.62 0-1.12.5-1.12 1.12v1.5c0 .62.5 1.13 1.12 1.13h3c.62 0 1.13-.5 1.13-1.13v-1.5c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57l.03.75H2.01q0-.4.03-.75a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
    </IconBase>
  ))
);

CreditCardAltFill.displayName = 'CreditCardAltFill';

// Triple export pattern (lucide-react style)
export { CreditCardAltFill, CreditCardAltFill as CreditCardAltFillIcon, CreditCardAltFill as SiCreditCardAltFill };
export default CreditCardAltFill;
export type { CreditCardAltFillProps };
