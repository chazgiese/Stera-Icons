import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptFillProps = Omit<IconBaseProps, 'children'>;

const ReceiptFill = memo(
  forwardRef<SVGSVGElement, ReceiptFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.58 1.38a.75.75 0 0 1 1.17.62v20a.75.75 0 0 1-1.17.62l-2.54-1.7-2.07 1.67a.75.75 0 0 1-.94 0L12 20.96 9.97 22.6a.75.75 0 0 1-.94 0l-2.07-1.66-2.54 1.7A.75.75 0 0 1 3.25 22V1.9a.75.75 0 0 1 1.17-.52l2.54 1.7L9.03 1.4l.1-.07a.8.8 0 0 1 .84.07L12 3.04l2.03-1.63.1-.07a.8.8 0 0 1 .84.07l2.07 1.66zM8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptFill.displayName = 'ReceiptFill';

// Triple export pattern (lucide-react style)
export { ReceiptFill, ReceiptFill as ReceiptFillIcon, ReceiptFill as SiReceiptFill };
export default ReceiptFill;
export type { ReceiptFillProps };
