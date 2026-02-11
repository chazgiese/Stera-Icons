import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-right-fill-duotone" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M9 6.09c0-1.3 1.56-1.94 2.48-1.03l5.85 5.86c.6.6.6 1.56 0 2.16l-5.85 5.86c-.92.91-2.48.27-2.48-1.03V13H3a1 1 0 1 1 0-2h6z" />
    </IconBase>
  ))
);

ArrowLineRightFillDuotone.displayName = 'ArrowLineRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineRightFillDuotone, ArrowLineRightFillDuotone as ArrowLineRightFillDuotoneIcon, ArrowLineRightFillDuotone as SiArrowLineRightFillDuotone };
export default ArrowLineRightFillDuotone;
export type { ArrowLineRightFillDuotoneProps };
