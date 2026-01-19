import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankFillDuotone = memo(
  forwardRef<SVGSVGElement, BankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-fill-duotone" {...props}>
      <path d="M18.75 17c1.24 0 2.25 1 2.25 2.25V20H3v-.75C3 18.01 4 17 5.25 17z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.58 2.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 10H3a1 1 0 0 1-.55-1.83l9-6zM12 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM7 17H5v-7h2zM11 17H9v-7h2zM15 17h-2v-7h2zM19 17h-2v-7h2zM12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

BankFillDuotone.displayName = 'BankFillDuotone';

// Triple export pattern (lucide-react style)
export { BankFillDuotone, BankFillDuotone as BankFillDuotoneIcon, BankFillDuotone as SiBankFillDuotone };
export default BankFillDuotone;
export type { BankFillDuotoneProps };
