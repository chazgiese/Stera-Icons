import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptAltFillProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltFill = memo(
  forwardRef<SVGSVGElement, ReceiptAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V20a1 1 0 0 1-1.47.88l-3.24-1.72-2.63 1.68a1 1 0 0 1-1.07 0L12 19.2l-2.59 1.65a1 1 0 0 1-1.07 0L5.7 19.16l-3.23 1.72A1 1 0 0 1 1 20V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM7 12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptAltFill.displayName = 'ReceiptAltFill';

// Triple export pattern (lucide-react style)
export { ReceiptAltFill, ReceiptAltFill as ReceiptAltFillIcon, ReceiptAltFill as SiReceiptAltFill };
export type { ReceiptAltFillProps };
