import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-fill-duotone" {...props}>
      <path d="M20 2a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" opacity={.4} />
        <path d="M10.92 6.67c.6-.6 1.56-.6 2.16 0l5.86 5.85c.91.92.27 2.48-1.03 2.48H13v6a1 1 0 0 1-2 0v-6H6.09a1.45 1.45 0 0 1-1.03-2.48z" />
    </IconBase>
  ))
);

ArrowLineUpFillDuotone.displayName = 'ArrowLineUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineUpFillDuotone, ArrowLineUpFillDuotone as ArrowLineUpFillDuotoneIcon, ArrowLineUpFillDuotone as SiArrowLineUpFillDuotone };
export default ArrowLineUpFillDuotone;
export type { ArrowLineUpFillDuotoneProps };
