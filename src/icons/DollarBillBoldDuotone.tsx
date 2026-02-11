import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarBillBoldDuotone = memo(
  forwardRef<SVGSVGElement, DollarBillBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="dollar-bill-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M20.15 5A3 3 0 0 1 23 8v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16.15M4 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-.9-1H4" clipRule="evenodd" opacity={.4} />
        <path d="M3 13.04c1.13.1 2.11.41 2.83 1.13A4.4 4.4 0 0 1 6.96 17H4.95c-.1-.77-.3-1.18-.53-1.42s-.65-.44-1.42-.53zM21 15.05c-.77.1-1.18.3-1.42.53s-.44.65-.53 1.42h-2a4.4 4.4 0 0 1 1.12-2.83A4.4 4.4 0 0 1 21 13.04z" />
        <path fillRule="evenodd" d="M12 8c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4S9.9 8 12 8m0 2c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" />
        <path d="M6.96 7a4.4 4.4 0 0 1-1.13 2.83A4.4 4.4 0 0 1 3 10.96V8.95c.77-.1 1.18-.3 1.42-.53s.44-.65.53-1.42zM19.05 7c.1.77.3 1.18.53 1.42s.65.44 1.42.53v2a4.4 4.4 0 0 1-2.83-1.12A4.4 4.4 0 0 1 17.04 7z" />
    </IconBase>
  ))
);

DollarBillBoldDuotone.displayName = 'DollarBillBoldDuotone';

// Triple export pattern (lucide-react style)
export { DollarBillBoldDuotone, DollarBillBoldDuotone as DollarBillBoldDuotoneIcon, DollarBillBoldDuotone as SiDollarBillBoldDuotone };
export default DollarBillBoldDuotone;
export type { DollarBillBoldDuotoneProps };
