import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotBoldProps = Omit<IconBaseProps, 'children'>;

const BellDotBold = memo(
  forwardRef<SVGSVGElement, BellDotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot-bold" {...props}>
      <path fillRule="evenodd" d="M12.3 2a1 1 0 0 1-.09 2H12C9.28 4 7 6.33 7 9.3v.38a7 7 0 0 1-1.18 3.89l-.92 1.38a1 1 0 0 0 .84 1.55h12.52a1 1 0 0 0 .83-1.55l-.91-1.38a7 7 0 0 1-.78-1.55 1 1 0 0 1 1.89-.67 5 5 0 0 0 .55 1.1l.92 1.39a3 3 0 0 1-2.5 4.66H16.4a4.5 4.5 0 0 1-8.78 0H5.74a3 3 0 0 1-2.5-4.66l.92-1.38A5 5 0 0 0 5 9.68V9.3C5 5.31 8.09 2 12 2zM9.71 18.5a2.5 2.5 0 0 0 4.58 0z" clipRule="evenodd" />
        <path d="M16.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

BellDotBold.displayName = 'BellDotBold';

// Triple export pattern (lucide-react style)
export { BellDotBold, BellDotBold as BellDotBoldIcon, BellDotBold as SiBellDotBold };
export default BellDotBold;
export type { BellDotBoldProps };
