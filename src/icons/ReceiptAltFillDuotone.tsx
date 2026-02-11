import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-alt-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M18.4 2.2A1 1 0 0 1 20 3v18a1 1 0 0 1-1.62.78l-1.88-1.5-1.87 1.5a1 1 0 0 1-1.34-.07l-1.36-1.37-1.8 1.44a1 1 0 0 1-1.34-.07l-1.36-1.37-1.8 1.44A1 1 0 0 1 4 21V3a1 1 0 0 1 1.6-.8l1.97 1.5 1.57-1.44.07-.06a1 1 0 0 1 1.28.06L12 3.64l1.51-1.38.08-.06a1 1 0 0 1 1.27.06l1.57 1.44zM9 13a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path d="M12 13a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ReceiptAltFillDuotone.displayName = 'ReceiptAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptAltFillDuotone, ReceiptAltFillDuotone as ReceiptAltFillDuotoneIcon, ReceiptAltFillDuotone as SiReceiptAltFillDuotone };
export default ReceiptAltFillDuotone;
export type { ReceiptAltFillDuotoneProps };
