import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DollarBillRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarBillRegularDuotone = memo(
  forwardRef<SVGSVGElement, DollarBillRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 5.25A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25zM4 6.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M21.25 14.78c-.97.07-1.52.3-1.84.63-.33.32-.56.87-.63 1.84h-1.5c.07-1.2.36-2.2 1.06-2.9.71-.71 1.7-1 2.91-1.08zM2.75 13.27c1.2.08 2.2.37 2.9 1.07.71.71 1 1.7 1.08 2.91h-1.5c-.08-.97-.3-1.52-.64-1.84-.32-.33-.87-.56-1.84-.63z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 8.25c1.92 0 3.25 1.81 3.25 3.75s-1.33 3.75-3.25 3.75S8.75 13.94 8.75 12 10.08 8.25 12 8.25m0 1.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" />
        <path fill="currentColor" d="M6.73 6.75c-.08 1.2-.37 2.2-1.07 2.9-.71.71-1.7 1-2.91 1.08V9.22c.97-.07 1.52-.3 1.84-.63.33-.32.56-.87.63-1.84zM18.78 6.75c.07.97.3 1.52.63 1.84.32.33.87.56 1.84.63v1.5c-1.2-.07-2.2-.36-2.9-1.06-.71-.71-1-1.7-1.08-2.91z" />
    </IconBase>
  ))
);

DollarBillRegularDuotone.displayName = 'DollarBillRegularDuotone';

export { DollarBillRegularDuotone };
export type { DollarBillRegularDuotoneProps };
