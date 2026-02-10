import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFill = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-fill" {...props}>
      <path fill="currentColor" d="M15.62 3.08a1 1 0 0 1 1.09.21l4 4 .06.08a1 1 0 0 1-.06 1.34l-4 4A1 1 0 0 1 15 12V9h-4.5a4.5 4.5 0 0 0 0 9H15a1 1 0 1 1 0 2h-4.5a6.5 6.5 0 1 1 0-13H15V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowURightTopFill.displayName = 'ArrowURightTopFill';

// Triple export pattern (lucide-react style)
export { ArrowURightTopFill, ArrowURightTopFill as ArrowURightTopFillIcon, ArrowURightTopFill as SiArrowURightTopFill };
export default ArrowURightTopFill;
export type { ArrowURightTopFillProps };
