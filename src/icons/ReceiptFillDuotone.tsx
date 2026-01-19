import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptFillDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.58 1.38a.75.75 0 0 1 1.17.62v20a.75.75 0 0 1-1.17.62l-2.54-1.7-2.07 1.67a.75.75 0 0 1-.94 0L12 20.96 9.97 22.6a.75.75 0 0 1-.94 0l-2.07-1.66-2.54 1.7A.75.75 0 0 1 3.25 22V1.9a.75.75 0 0 1 1.17-.52l2.54 1.7L9.03 1.4l.1-.07a.8.8 0 0 1 .84.07L12 3.04l2.03-1.63.1-.07a.8.8 0 0 1 .84.07l2.07 1.66zM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 15.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 7.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ReceiptFillDuotone.displayName = 'ReceiptFillDuotone';

// Triple export pattern (lucide-react style)
export { ReceiptFillDuotone, ReceiptFillDuotone as ReceiptFillDuotoneIcon, ReceiptFillDuotone as SiReceiptFillDuotone };
export type { ReceiptFillDuotoneProps };
