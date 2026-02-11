import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-alt-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M4.92 2h.21l.05.02h.04l.05.02.04.01a1 1 0 0 1 .26.13l.04.02 1.96 1.5 1.57-1.44a1 1 0 0 1 1.35 0L12 3.65l1.51-1.39a1 1 0 0 1 1.35 0l1.57 1.44 1.96-1.5.04-.02.08-.05.03-.02.24-.09h.04l.05-.01h.26l.07.01h.02l.04.01.05.02.06.02.02.01.08.04.15.1.02.01.02.02.05.04v.01l.05.05.01.02.03.02.02.04.05.07.02.04.03.06v.02l.07.26V3L20 3v18.12l-.04.17-.02.04-.01.05-.02.04-.03.05-.02.04-.03.04-.02.04-.03.04a1 1 0 0 1-.67.36H19V22h-.12l-.17-.04-.04-.02-.05-.01-.04-.02-.05-.03q-.02 0-.03-.02l-.13-.08-1.87-1.5-1.88 1.5a1 1 0 0 1-1.33-.07l-1.36-1.37-1.8 1.44a1 1 0 0 1-1.34-.07l-1.36-1.37-1.8 1.44-.05.03-.03.02-.04.03-.04.02-.05.03-.04.02-.05.01-.04.02-.17.03h-.09L5 22h-.11a1 1 0 0 1-.64-.34l-.03-.03-.03-.04-.02-.04a1 1 0 0 1-.13-.26l-.01-.07-.01-.02v-.02L4 21.13v-.04L4 21V2.87l.02-.05v-.04l.02-.06.07-.18.02-.03.05-.08.02-.04.02-.02.02-.02.12-.12h.01l.15-.1.01-.01.16-.07.05-.01.05-.02h.04L4.87 2h.05m7.75 3.74a1 1 0 0 1-1.27.06l-.07-.06L9.8 4.36 8.3 5.74a1 1 0 0 1-1.2.1l-.08-.04L6 5.02v13.9l.87-.7.08-.06a1 1 0 0 1 1.26.13l1.36 1.37 1.8-1.44.08-.06a1 1 0 0 1 1.26.13l1.36 1.37 1.8-1.44.15-.1a1 1 0 0 1 1.1.1l.88.7V5.02l-1.02.78a1 1 0 0 1-1.21 0l-.07-.06-1.51-1.38z" clipRule="evenodd" opacity={.4} />
        <path d="M12 13a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ReceiptAltBoldDuotone.displayName = 'ReceiptAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptAltBoldDuotone, ReceiptAltBoldDuotone as ReceiptAltBoldDuotoneIcon, ReceiptAltBoldDuotone as SiReceiptAltBoldDuotone };
export default ReceiptAltBoldDuotone;
export type { ReceiptAltBoldDuotoneProps };
