import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptAltBoldProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltBold = memo(
  forwardRef<SVGSVGElement, ReceiptAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-alt-bold" {...props}>
      <path fill="currentColor" d="M17 12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zM17 8a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v11.18a1 1 0 0 1-.58.92l-.04.02a1 1 0 0 1-.48.08h-.02a1 1 0 0 1-.35-.12l-3.24-1.72-2.63 1.68a1 1 0 0 1-1.07 0L12 19.2l-2.59 1.65a1 1 0 0 1-1.07 0L5.7 19.16l-3.23 1.72-.05.03-.04.01-.06.03h-.03l-.17.04H2.1a1 1 0 0 1-.49-.07H1.6a1 1 0 0 1-.47-.45l-.03-.05-.01-.04-.01-.03A1 1 0 0 1 1 20V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82C3 7.36 3 7.94 3 8.8v9.53l2.28-1.21.12-.06a1 1 0 0 1 .89.1l2.58 1.65 2.6-1.65a1 1 0 0 1 1.07 0l2.58 1.65 2.6-1.65a1 1 0 0 1 1-.04L21 18.33V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptAltBold.displayName = 'ReceiptAltBold';

// Triple export pattern (lucide-react style)
export { ReceiptAltBold, ReceiptAltBold as ReceiptAltBoldIcon, ReceiptAltBold as SiReceiptAltBold };
export default ReceiptAltBold;
export type { ReceiptAltBoldProps };
