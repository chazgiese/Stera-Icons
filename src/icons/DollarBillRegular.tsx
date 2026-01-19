import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DollarBillRegularProps = Omit<IconBaseProps, 'children'>;

const DollarBillRegular = memo(
  forwardRef<SVGSVGElement, DollarBillRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="dollar-bill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 8.25c1.92 0 3.25 1.81 3.25 3.75s-1.33 3.75-3.25 3.75S8.75 13.94 8.75 12 10.08 8.25 12 8.25m0 1.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M20 5.25A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25zM2.75 16c0 .69.56 1.25 1.25 1.25h1.22c-.07-.97-.3-1.52-.63-1.84-.32-.33-.87-.56-1.84-.63zm18.5-1.22c-.97.07-1.52.3-1.84.63-.33.32-.56.87-.63 1.84H20c.69 0 1.25-.56 1.25-1.25zM6.73 6.75c-.08 1.2-.37 2.2-1.07 2.9-.71.71-1.7 1-2.91 1.08v2.54c1.2.08 2.2.37 2.9 1.07.71.71 1 1.7 1.08 2.91h10.54c.08-1.2.37-2.2 1.07-2.9.71-.71 1.7-1 2.91-1.08v-2.54c-1.2-.08-2.2-.37-2.9-1.07-.71-.71-1-1.7-1.08-2.91zM4 6.75c-.69 0-1.25.56-1.25 1.25v1.22c.97-.07 1.52-.3 1.84-.63.33-.32.56-.87.63-1.84zm14.78 0c.07.97.3 1.52.63 1.84.32.33.87.56 1.84.63V8c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillRegular.displayName = 'DollarBillRegular';

// Triple export pattern (lucide-react style)
export { DollarBillRegular, DollarBillRegular as DollarBillRegularIcon, DollarBillRegular as SiDollarBillRegular };
export default DollarBillRegular;
export type { DollarBillRegularProps };
