import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DollarBillBoldProps = Omit<IconBaseProps, 'children'>;

const DollarBillBold = memo(
  forwardRef<SVGSVGElement, DollarBillBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 8c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4S9.9 8 12 8m0 2c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M20.15 5A3 3 0 0 1 23 8v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16.15M3 16a1 1 0 0 0 1 1h.95c-.1-.77-.3-1.18-.53-1.42s-.65-.44-1.42-.53zm18-.95c-.77.1-1.18.3-1.42.53s-.44.65-.53 1.42H20a1 1 0 0 0 1-1zM6.96 7a4.4 4.4 0 0 1-1.13 2.83A4.4 4.4 0 0 1 3 10.96v2.08c1.13.1 2.11.41 2.83 1.13A4.4 4.4 0 0 1 6.96 17h10.08a4.4 4.4 0 0 1 1.13-2.83A4.4 4.4 0 0 1 21 13.04v-2.08a4.4 4.4 0 0 1-2.83-1.13A4.4 4.4 0 0 1 17.04 7zM4 7a1 1 0 0 0-1 1v.95c.77-.1 1.18-.3 1.42-.53s.44-.65.53-1.42zm15.05 0c.1.77.3 1.18.53 1.42s.65.44 1.42.53V8a1 1 0 0 0-.9-1h-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillBold.displayName = 'DollarBillBold';

// Triple export pattern (lucide-react style)
export { DollarBillBold, DollarBillBold as DollarBillBoldIcon, DollarBillBold as SiDollarBillBold };
export type { DollarBillBoldProps };
