import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightBold = memo(
  forwardRef<SVGSVGElement, RotateCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-bold" {...props}>
      <path d="M12.8 6.3a1 1 0 0 1 1.4 0l2.44 2.42a1.1 1.1 0 0 1 0 1.56L14.2 12.7a1 1 0 1 1-1.42-1.42l.8-.79h-1.84A2.75 2.75 0 1 0 14 14.84a1 1 0 0 1 1.63 1.15 4.75 4.75 0 1 1-3.88-7.49h1.84l-.8-.8a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightBold.displayName = 'RotateCircleRightBold';

// Triple export pattern (lucide-react style)
export { RotateCircleRightBold, RotateCircleRightBold as RotateCircleRightBoldIcon, RotateCircleRightBold as SiRotateCircleRightBold };
export default RotateCircleRightBold;
export type { RotateCircleRightBoldProps };
