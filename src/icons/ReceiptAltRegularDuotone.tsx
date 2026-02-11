import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-alt-duotone" {...props}>
      <path fillRule="evenodd" d="M19 2.25h.11l.09.03.06.02q.04 0 .08.03l.05.03.13.1.02.02.06.07.01.02.07.12.03.08.02.06.02.12v18.12l-.05.18-.02.06-.1.16a1 1 0 0 1-.33.23l-.07.02-.08.02h-.03l-.07.01h-.07l-.18-.05-.06-.02-.16-.1-2.03-1.62-2.03 1.63a.75.75 0 0 1-1-.06L11.94 20 9.97 21.6a.75.75 0 0 1-1-.06L7.44 20 5.47 21.6l-.16.09-.06.02-.18.05H4.9l-.08-.03a1 1 0 0 1-.27-.12l-.14-.13-.1-.16-.01-.06-.05-.18V2.95l.02-.12.02-.06q0-.05.03-.08l.05-.1.02-.02.01-.02.06-.07.02-.02.13-.1.05-.03.08-.03.06-.02.09-.02h.02L5 2.25h.05l.12.02.06.02q.05 0 .08.03l.12.07.02.01 2.13 1.62 1.73-1.57a.75.75 0 0 1 1 0L12 3.98l1.68-1.53a.75.75 0 0 1 1.01 0l1.73 1.57 2.13-1.62.02-.01.02-.02.1-.05.08-.03.06-.02.12-.02H19m-6.5 3.3a.75.75 0 0 1-.9.09l-.1-.09L9.8 4.02 8.13 5.55a.75.75 0 0 1-.85.12l-.1-.07L5.74 4.5v14.93l1.28-1.03.12-.07c.29-.15.64-.1.88.13l1.52 1.52 1.98-1.58.12-.07c.29-.15.64-.1.88.13l1.52 1.52 1.98-1.58.1-.07a.8.8 0 0 1 .84.07l1.28 1.03V4.5L16.83 5.6c-.25.19-.6.2-.85.03l-.11-.08-1.68-1.53z" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM15 9.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ReceiptAltRegularDuotone.displayName = 'ReceiptAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptAltRegularDuotone, ReceiptAltRegularDuotone as ReceiptAltRegularDuotoneIcon, ReceiptAltRegularDuotone as SiReceiptAltRegularDuotone };
export default ReceiptAltRegularDuotone;
export type { ReceiptAltRegularDuotoneProps };
