import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellBoldProps = Omit<IconBaseProps, 'children'>;

const BellBold = memo(
  forwardRef<SVGSVGElement, BellBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c3.91 0 7 3.31 7 7.3v.38a5 5 0 0 0 .84 2.78l.92 1.38a3 3 0 0 1-2.5 4.66H16.4a4.5 4.5 0 0 1-8.78 0H5.74a3 3 0 0 1-2.5-4.66l.92-1.38A5 5 0 0 0 5 9.68V9.3C5 5.31 8.09 2 12 2M9.71 18.5a2.5 2.5 0 0 0 4.58 0zM12 4C9.28 4 7 6.33 7 9.3v.38a7 7 0 0 1-1.18 3.89l-.91 1.38a1 1 0 0 0 .83 1.55h12.52a1 1 0 0 0 .83-1.55l-.91-1.38A7 7 0 0 1 17 9.68V9.3C17 6.33 14.72 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

BellBold.displayName = 'BellBold';

// Triple export pattern (lucide-react style)
export { BellBold, BellBold as BellBoldIcon, BellBold as SiBellBold };
export default BellBold;
export type { BellBoldProps };
