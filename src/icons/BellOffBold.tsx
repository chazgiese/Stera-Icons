import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffBoldProps = Omit<IconBaseProps, 'children'>;

const BellOffBold = memo(
  forwardRef<SVGSVGElement, BellOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-2.21-2.2h-.7a4.5 4.5 0 0 1-8.78 0H5.74a3 3 0 0 1-2.5-4.66l.92-1.38A5 5 0 0 0 5 9.68V9.3q.01-1.31.41-2.47L3.3 4.7a1 1 0 0 1 0-1.42M9.7 18.5a2.5 2.5 0 0 0 4.58 0zM7.06 8.48Q7 8.88 7 9.3v.38a7 7 0 0 1-1.18 3.89l-.92 1.38a1 1 0 0 0 .84 1.55h9.35z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 2c3.91 0 7 3.31 7 7.3v.38a5 5 0 0 0 .84 2.78l.92 1.38c.5.74.6 1.6.42 2.36a1 1 0 1 1-1.94-.47 1 1 0 0 0-.15-.78l-.91-1.38A7 7 0 0 1 17 9.68V9.3C17 6.33 14.72 4 12 4c-1.1 0-2.1.37-2.93 1a1 1 0 0 1-1.22-1.58A6.8 6.8 0 0 1 12 2" />
    </IconBase>
  ))
);

BellOffBold.displayName = 'BellOffBold';

// Triple export pattern (lucide-react style)
export { BellOffBold, BellOffBold as BellOffBoldIcon, BellOffBold as SiBellOffBold };
export default BellOffBold;
export type { BellOffBoldProps };
