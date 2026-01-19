import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellDotBoldProps = Omit<IconBaseProps, 'children'>;

const BellDotBold = memo(
  forwardRef<SVGSVGElement, BellDotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1q.48 0 .95.05a1 1 0 0 1-.2 1.99L12 3a7 7 0 0 0-7 7v2.45a3 3 0 0 1-.43 1.54l-.9 1.5A1 1 0 0 0 4.54 17h14.94a1 1 0 0 0 .86-1.51l-.9-1.5a3 3 0 0 1-.43-1.54v-.26a1 1 0 1 1 2 0v.26a1 1 0 0 0 .14.51l.9 1.5A3 3 0 0 1 19.47 19H16.9a5 5 0 0 1-9.8 0H4.53a3 3 0 0 1-2.57-4.54l.9-1.5a1 1 0 0 0 .14-.51V10a9 9 0 0 1 9-9M9.17 19a3 3 0 0 0 5.66 0z" clipRule="evenodd" />
        <path fill="currentColor" d="M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

BellDotBold.displayName = 'BellDotBold';

// Triple export pattern (lucide-react style)
export { BellDotBold, BellDotBold as BellDotBoldIcon, BellDotBold as SiBellDotBold };
export default BellDotBold;
export type { BellDotBoldProps };
