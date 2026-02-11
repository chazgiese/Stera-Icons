import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFill = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-fill" {...props}>
      <path d="M10.92 6.67c.6-.6 1.56-.6 2.16 0l5.86 5.85c.91.92.27 2.48-1.03 2.48H13v6a1 1 0 1 1-2 0v-6H6.09a1.45 1.45 0 0 1-1.03-2.48zM20 2a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ArrowLineUpFill.displayName = 'ArrowLineUpFill';

// Triple export pattern (lucide-react style)
export { ArrowLineUpFill, ArrowLineUpFill as ArrowLineUpFillIcon, ArrowLineUpFill as SiArrowLineUpFill };
export default ArrowLineUpFill;
export type { ArrowLineUpFillProps };
