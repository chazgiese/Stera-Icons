import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFill = memo(
  forwardRef<SVGSVGElement, ArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-fill" {...props}>
      <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v7h5a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 12h5V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowDownFill.displayName = 'ArrowDownFill';

// Triple export pattern (lucide-react style)
export { ArrowDownFill, ArrowDownFill as ArrowDownFillIcon, ArrowDownFill as SiArrowDownFill };
export default ArrowDownFill;
export type { ArrowDownFillProps };
