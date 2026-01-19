import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CreditCardAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CreditCardAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CreditCardAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-alt-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M23 15.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V10h22zM6.5 12.5c-.83 0-1.5.67-1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V14c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" opacity={0.4} />
        <path d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57Q23 7.29 23 8H1q0-.72.04-1.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" opacity={0.4} />
        <path fill="currentColor" d="M9.5 12.5c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 5 15.5V14c0-.83.67-1.5 1.5-1.5zM23 10H1V8h22z" />
    </IconBase>
  ))
);

CreditCardAltFillDuotone.displayName = 'CreditCardAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CreditCardAltFillDuotone, CreditCardAltFillDuotone as CreditCardAltFillDuotoneIcon, CreditCardAltFillDuotone as SiCreditCardAltFillDuotone };
export type { CreditCardAltFillDuotoneProps };
