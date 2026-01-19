import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DollarBillFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarBillFillDuotone = memo(
  forwardRef<SVGSVGElement, DollarBillFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="dollar-bill-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM3 16a1 1 0 0 0 1 1h2.46a4 4 0 0 0-.98-2.48c-.6-.6-1.43-.88-2.48-.98zm18-2.46c-1.05.1-1.88.39-2.48.98-.6.6-.88 1.43-.98 2.48H20a1 1 0 0 0 1-1zm-9-5.29c-1.92 0-3.25 1.81-3.25 3.75s1.33 3.75 3.25 3.75 3.25-1.81 3.25-3.75S13.92 8.25 12 8.25M4 7a1 1 0 0 0-1 1v2.46a4 4 0 0 0 2.48-.98c.6-.6.88-1.43.98-2.48zm13.54 0c.1 1.05.39 1.88.98 2.48.6.6 1.43.88 2.48.98V8a1 1 0 0 0-.9-1h-2.56" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M3 13.54c1.05.1 1.88.39 2.48.98.6.6.88 1.43.98 2.48H4a1 1 0 0 1-1-1zM21 16a1 1 0 0 1-1 1h-2.46c.1-1.05.39-1.88.98-2.48.6-.6 1.43-.88 2.48-.98zM12 8.25c1.92 0 3.25 1.81 3.25 3.75s-1.33 3.75-3.25 3.75S8.75 13.94 8.75 12 10.08 8.25 12 8.25M6.46 7a4 4 0 0 1-.98 2.48c-.6.6-1.43.88-2.48.98V8a1 1 0 0 1 1-1zM20.1 7c.5.06.9.48.9 1v2.46a4 4 0 0 1-2.48-.98c-.6-.6-.88-1.43-.98-2.48h2.56" />
    </IconBase>
  ))
);

DollarBillFillDuotone.displayName = 'DollarBillFillDuotone';

// Triple export pattern (lucide-react style)
export { DollarBillFillDuotone, DollarBillFillDuotone as DollarBillFillDuotoneIcon, DollarBillFillDuotone as SiDollarBillFillDuotone };
export default DollarBillFillDuotone;
export type { DollarBillFillDuotoneProps };
