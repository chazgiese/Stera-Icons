import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-fill" {...props}>
      <path fill="currentColor" d="M5.3 5.3a1 1 0 0 1 1.4 0l6.8 6.79 3.8-3.8A1 1 0 0 1 19 9v9a1 1 0 0 1-1 1H9a1 1 0 0 1-.7-1.7l3.79-3.8-6.8-6.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowDownRightFill.displayName = 'ArrowDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowDownRightFill, ArrowDownRightFill as ArrowDownRightFillIcon, ArrowDownRightFill as SiArrowDownRightFill };
export default ArrowDownRightFill;
export type { ArrowDownRightFillProps };
