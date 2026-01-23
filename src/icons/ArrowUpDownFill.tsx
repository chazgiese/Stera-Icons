import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-down-fill" {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 .7.3l4 4A1 1 0 0 1 16 7h-3v10h3a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.33.08l-.08-.07-4-4A1 1 0 0 1 8 17h3V7H8a1 1 0 0 1-.7-1.7l4-4 .07-.07A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownFill.displayName = 'ArrowUpDownFill';

// Triple export pattern (lucide-react style)
export { ArrowUpDownFill, ArrowUpDownFill as ArrowUpDownFillIcon, ArrowUpDownFill as SiArrowUpDownFill };
export default ArrowUpDownFill;
export type { ArrowUpDownFillProps };
