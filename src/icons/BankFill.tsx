import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillProps = Omit<IconBaseProps, 'children'>;

const BankFill = memo(
  forwardRef<SVGSVGElement, BankFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.58 3.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 11h-2v4.01c1.12.13 2 1.08 2 2.24V18h.1a1 1 0 0 1-.1 2H3a1 1 0 0 1-.1-2H3v-.75c0-1.16.88-2.11 2-2.24V11H3a1 1 0 0 1-.55-1.83l9-6zM5.25 17a.25.25 0 0 0-.25.25V18h14v-.75a.25.25 0 0 0-.25-.25zM7 15h2v-4H7zm4 0h2v-4h-2zm4 0h2v-4h-2zm-3-8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFill.displayName = 'BankFill';

// Triple export pattern (lucide-react style)
export { BankFill, BankFill as BankFillIcon, BankFill as SiBankFill };
export default BankFill;
export type { BankFillProps };
