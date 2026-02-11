import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankFillDuotone = memo(
  forwardRef<SVGSVGElement, BankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-fill-duotone" {...props}>
      <path d="M19 15.01c1.12.13 2 1.08 2 2.24V18H3v-.75c0-1.16.88-2.11 2-2.24V11h2v4h2v-4h2v4h2v-4h2v4h2v-4h2zM12 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" opacity={0.4} />
        <path fillRule="evenodd" d="M11.58 3.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 11H3a1 1 0 0 1-.55-1.83l9-6zM12 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path d="M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BankFillDuotone.displayName = 'BankFillDuotone';

// Triple export pattern (lucide-react style)
export { BankFillDuotone, BankFillDuotone as BankFillDuotoneIcon, BankFillDuotone as SiBankFillDuotone };
export default BankFillDuotone;
export type { BankFillDuotoneProps };
