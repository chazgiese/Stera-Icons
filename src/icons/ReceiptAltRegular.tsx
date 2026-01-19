import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptAltRegularProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltRegular = memo(
  forwardRef<SVGSVGElement, ReceiptAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-alt" {...props}>
      <path fill="currentColor" d="M17 12.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 8.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V20l-.02.18-.04.1v.03l-.03.04a1 1 0 0 1-.28.3l-.2.07-.1.03h-.15l-.11-.02-.1-.04h-.03l-.04-.03-3.37-1.8-2.75 1.77a.8.8 0 0 1-.8 0L12 18.9l-2.72 1.74a.8.8 0 0 1-.8 0L5.7 18.87l-3.36 1.8-.04.01-.03.01-.1.04-.11.02h-.15q-.06 0-.1-.03a.8.8 0 0 1-.5-.41l-.01-.03-.04-.1-.02-.18V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM6.8 4.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v9.95l2.65-1.41.09-.04a.8.8 0 0 1 .66.07l2.72 1.74 2.73-1.74.1-.05c.22-.1.49-.09.7.05l2.72 1.74 2.73-1.74.08-.05q.34-.16.67.02l2.65 1.4V8.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptAltRegular.displayName = 'ReceiptAltRegular';

// Triple export pattern (lucide-react style)
export { ReceiptAltRegular, ReceiptAltRegular as ReceiptAltRegularIcon, ReceiptAltRegular as SiReceiptAltRegular };
export type { ReceiptAltRegularProps };
