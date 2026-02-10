import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CreditCardAltBoldProps = Omit<IconBaseProps, 'children'>;

const CreditCardAltBold = memo(
  forwardRef<SVGSVGElement, CreditCardAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="credit-card-alt-bold" {...props}>
      <path fill="currentColor" d="M9.75 12.5c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-1.5c0-.69.56-1.25 1.25-1.25z" />
        <path fill="currentColor" fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM4 14.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.7H4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82q-.02.26-.03.59h15.98q0-.33-.03-.59c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

CreditCardAltBold.displayName = 'CreditCardAltBold';

// Triple export pattern (lucide-react style)
export { CreditCardAltBold, CreditCardAltBold as CreditCardAltBoldIcon, CreditCardAltBold as SiCreditCardAltBold };
export default CreditCardAltBold;
export type { CreditCardAltBoldProps };
