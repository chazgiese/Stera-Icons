import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v12l-.02.18-.04.1v.03l-.03.04a1 1 0 0 1-.28.3l-.2.07-.1.03h-.15l-.11-.02-.1-.04h-.03l-.04-.03-3.37-1.8-2.75 1.77a.8.8 0 0 1-.8 0L12 18.9l-2.72 1.74a.8.8 0 0 1-.8 0L5.7 18.87l-3.36 1.8-.04.01-.03.01-.1.04-.11.02h-.15q-.06 0-.1-.03a.8.8 0 0 1-.5-.41l-.01-.03-.04-.1-.02-.18V8q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM6 4.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.39-.03.88-.03 1.59v10.75l2.65-1.41.09-.04a.8.8 0 0 1 .66.07l2.72 1.74 2.73-1.74.1-.05c.22-.1.49-.09.7.05l2.72 1.74 2.73-1.74.08-.05q.34-.16.67.02l2.65 1.4V8c0-.71 0-1.2-.03-1.58a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17 12.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 8.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ReceiptAltRegularDuotone.displayName = 'ReceiptAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptAltRegularDuotone, ReceiptAltRegularDuotone as ReceiptAltRegularDuotoneIcon, ReceiptAltRegularDuotone as SiReceiptAltRegularDuotone };
export type { ReceiptAltRegularDuotoneProps };
