import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowRightFill = memo(
  forwardRef<SVGSVGElement, ArrowRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-right-fill" {...props}>
      <path fill="currentColor" d="M12.62 5.08a1 1 0 0 1 1.09.21l6 6a1 1 0 0 1 0 1.42l-6 6A1 1 0 0 1 12 18v-5H5a1 1 0 0 1 0-2h7V6a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowRightFill.displayName = 'ArrowRightFill';

// Triple export pattern (lucide-react style)
export { ArrowRightFill, ArrowRightFill as ArrowRightFillIcon, ArrowRightFill as SiArrowRightFill };
export default ArrowRightFill;
export type { ArrowRightFillProps };
