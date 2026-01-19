import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BankFillProps = Omit<IconBaseProps, 'children'>;

const BankFill = memo(
  forwardRef<SVGSVGElement, BankFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.58 2.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 10h-2v7h.65A1.5 1.5 0 0 1 21 18.5V20h.1a1 1 0 0 1-.1 2H3a1 1 0 0 1-.1-2H3v-1.5c0-.83.67-1.5 1.5-1.5H5v-7H3a1 1 0 0 1-.55-1.83l9-6zM7 17h2v-7H7zm4 0h2v-7h-2zm4 0h2v-7h-2zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFill.displayName = 'BankFill';

// Triple export pattern (lucide-react style)
export { BankFill, BankFill as BankFillIcon, BankFill as SiBankFill };
export default BankFill;
export type { BankFillProps };
