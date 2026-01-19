import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptBoldDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.45 1.17A1 1 0 0 1 21 2v20a1 1 0 0 1-1.55.83l-2.4-1.6-1.93 1.55a1 1 0 0 1-1.24 0L12 21.28l-1.87 1.5a1 1 0 0 1-1.26 0l-1.92-1.54-2.4 1.6A1 1 0 0 1 3 22V2l.01-.14a1 1 0 0 1 1.54-.7l2.4 1.6 1.92-1.54.15-.1a1 1 0 0 1 1.1.1L12 2.72l1.88-1.5.14-.1a1 1 0 0 1 1.1.1l1.93 1.54zm-6.82 3.61a1 1 0 0 1-1.26 0L9.5 3.28l-1.87 1.5a1 1 0 0 1-1.18.05L5 3.87v16.26l1.45-.96.14-.08a1 1 0 0 1 1.04.13l1.87 1.5 1.88-1.5a1 1 0 0 1 1.24 0l1.88 1.5 1.88-1.5a1 1 0 0 1 1.17-.05l1.45.96V3.87l-1.45.96a1 1 0 0 1-1.18-.05l-1.87-1.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14.5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 7.5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ReceiptBoldDuotone.displayName = 'ReceiptBoldDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptBoldDuotone, ReceiptBoldDuotone as ReceiptBoldDuotoneIcon, ReceiptBoldDuotone as SiReceiptBoldDuotone };
export default ReceiptBoldDuotone;
export type { ReceiptBoldDuotoneProps };
