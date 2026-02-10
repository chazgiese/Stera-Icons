import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReceiptFillProps = Omit<IconBaseProps, 'children'>;

const ReceiptFill = memo(
  forwardRef<SVGSVGElement, ReceiptFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="receipt-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.4 2.2A1 1 0 0 1 20 3v18a1 1 0 0 1-1.62.78l-1.88-1.5-1.87 1.5a1 1 0 0 1-1.34-.07l-1.36-1.37-1.8 1.44a1 1 0 0 1-1.34-.07l-1.36-1.37-1.8 1.44A1 1 0 0 1 4 21V3a1 1 0 0 1 1.6-.8l1.97 1.5 1.57-1.44.07-.06a1 1 0 0 1 1.28.06L12 3.64l1.51-1.38.08-.06a1 1 0 0 1 1.27.06l1.57 1.44zM8.5 13.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0-4a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptFill.displayName = 'ReceiptFill';

// Triple export pattern (lucide-react style)
export { ReceiptFill, ReceiptFill as ReceiptFillIcon, ReceiptFill as SiReceiptFill };
export default ReceiptFill;
export type { ReceiptFillProps };
