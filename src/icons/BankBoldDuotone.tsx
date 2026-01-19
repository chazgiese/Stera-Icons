import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BankBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankBoldDuotone = memo(
  forwardRef<SVGSVGElement, BankBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-bold-duotone" {...props}>
      <path d="M18.75 17c1.24 0 2.25 1 2.25 2.25V20h-2v-.75a.25.25 0 0 0-.25-.25H5.25a.25.25 0 0 0-.25.25V20H3v-.75C3 18.01 4 17 5.25 17z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.58 2.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 10H3a1 1 0 0 1-.55-1.83l9-6zM6.3 8h11.4L12 4.2z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM7 17H5v-7h2zM11 17H9v-7h2zM15 17h-2v-7h2zM19 17h-2v-7h2zM12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </IconBase>
  ))
);

BankBoldDuotone.displayName = 'BankBoldDuotone';

// Triple export pattern (lucide-react style)
export { BankBoldDuotone, BankBoldDuotone as BankBoldDuotoneIcon, BankBoldDuotone as SiBankBoldDuotone };
export default BankBoldDuotone;
export type { BankBoldDuotoneProps };
