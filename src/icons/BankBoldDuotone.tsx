import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankBoldDuotone = memo(
  forwardRef<SVGSVGElement, BankBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-bold-duotone" {...props}>
      <path d="M5.25 17a.25.25 0 0 0-.25.25V18H3v-.75c0-1.16.88-2.11 2-2.24V11h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4.01c1.12.13 2 1.08 2 2.24V18h-2v-.75a.25.25 0 0 0-.25-.25zM12 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" opacity={0.4} />
        <path d="M21 18a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M11.58 3.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 11H3a1 1 0 0 1-.55-1.83l9-6zM6.3 9h11.4L12 5.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankBoldDuotone.displayName = 'BankBoldDuotone';

// Triple export pattern (lucide-react style)
export { BankBoldDuotone, BankBoldDuotone as BankBoldDuotoneIcon, BankBoldDuotone as SiBankBoldDuotone };
export default BankBoldDuotone;
export type { BankBoldDuotoneProps };
