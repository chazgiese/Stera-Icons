import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotateRightBold = memo(
  forwardRef<SVGSVGElement, RotateRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-bold" {...props}>
      <path fill="currentColor" d="M12.8 1.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4-1.4L14.58 7H12a6.5 6.5 0 1 0 6.5 6.5 1 1 0 1 1 2 0A8.5 8.5 0 1 1 12 5h2.59l-1.8-1.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

RotateRightBold.displayName = 'RotateRightBold';

// Triple export pattern (lucide-react style)
export { RotateRightBold, RotateRightBold as RotateRightBoldIcon, RotateRightBold as SiRotateRightBold };
export default RotateRightBold;
export type { RotateRightBoldProps };
