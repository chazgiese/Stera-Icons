import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellBoldDuotone = memo(
  forwardRef<SVGSVGElement, BellBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2c3.91 0 7 3.31 7 7.3v.38a5 5 0 0 0 .84 2.78l.92 1.38a3 3 0 0 1-2.5 4.66H5.74a3 3 0 0 1-2.5-4.66l.92-1.38A5 5 0 0 0 5 9.68V9.3C5 5.31 8.09 2 12 2m0 2C9.28 4 7 6.33 7 9.3v.38a7 7 0 0 1-1.18 3.89l-.91 1.38a1 1 0 0 0 .83 1.55h12.52a1 1 0 0 0 .83-1.55l-.91-1.38A7 7 0 0 1 17 9.68V9.3C17 6.33 14.72 4 12 4" clipRule="evenodd" />
        <path d="M16.39 18.5a4.5 4.5 0 0 1-8.78 0h2.1a2.5 2.5 0 0 0 4.58 0z" opacity={.4} />
    </IconBase>
  ))
);

BellBoldDuotone.displayName = 'BellBoldDuotone';

// Triple export pattern (lucide-react style)
export { BellBoldDuotone, BellBoldDuotone as BellBoldDuotoneIcon, BellBoldDuotone as SiBellBoldDuotone };
export default BellBoldDuotone;
export type { BellBoldDuotoneProps };
