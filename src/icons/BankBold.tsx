import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BankBoldProps = Omit<IconBaseProps, 'children'>;

const BankBold = memo(
  forwardRef<SVGSVGElement, BankBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-bold" {...props}>
      <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fill="currentColor" fillRule="evenodd" d="M11.58 2.1a1 1 0 0 1 .97.07l9 6A1 1 0 0 1 21 10h-2v7.01c1.13.13 2 1.08 2 2.24V20h.1a1 1 0 0 1-.1 2H3a1 1 0 0 1-.1-2H3v-.75c0-1.16.88-2.11 2-2.24V10H3a1 1 0 0 1-.55-1.83l9-6zM5.25 19a.25.25 0 0 0-.25.25V20h14v-.75a.25.25 0 0 0-.2-.25H5.25M7 17h2v-7H7zm4 0h2v-7h-2zm4 0h2v-7h-2zM6.3 8h11.4L12 4.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankBold.displayName = 'BankBold';

// Triple export pattern (lucide-react style)
export { BankBold, BankBold as BankBoldIcon, BankBold as SiBankBold };
export type { BankBoldProps };
