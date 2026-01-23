import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillFillProps = Omit<IconBaseProps, 'children'>;

const DollarBillFill = memo(
  forwardRef<SVGSVGElement, DollarBillFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="dollar-bill-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 5a3 3 0 0 1 1.22.26l.13.06a3 3 0 0 1 .7.5l.09.08.11.12.09.1.08.11.08.11.07.12.08.13.06.13.06.13.04.11.06.17.01.04A3 3 0 0 1 23 8v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm1 9.05c-1.92.19-2.76 1.03-2.95 2.95H20a1 1 0 0 0 1-1zM3 16a1 1 0 0 0 1 1h1.95c-.19-1.92-1.03-2.76-2.95-2.95zm9-7.75c-1.92 0-3.25 1.81-3.25 3.75s1.33 3.75 3.25 3.75 3.25-1.81 3.25-3.75S13.92 8.25 12 8.25M4 7a1 1 0 0 0-1 1v1.95C4.92 9.75 5.76 8.92 5.95 7zm14.05 0c.19 1.92 1.03 2.76 2.95 2.95V8a1 1 0 0 0-.9-1h-2.05" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillFill.displayName = 'DollarBillFill';

// Triple export pattern (lucide-react style)
export { DollarBillFill, DollarBillFill as DollarBillFillIcon, DollarBillFill as SiDollarBillFill };
export default DollarBillFill;
export type { DollarBillFillProps };
