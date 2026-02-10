import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFill = memo(
  forwardRef<SVGSVGElement, ArrowURightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-fill" {...props}>
      <path fill="currentColor" d="M15 4a1 1 0 1 1 0 2h-4.5a4.5 4.5 0 0 0 0 9H15v-3a1 1 0 0 1 1.7-.7l4 4a1 1 0 0 1 .07 1.33l-.06.08-4 4A1 1 0 0 1 15 20v-3h-4.5a6.5 6.5 0 1 1 0-13z" />
    </IconBase>
  ))
);

ArrowURightFill.displayName = 'ArrowURightFill';

// Triple export pattern (lucide-react style)
export { ArrowURightFill, ArrowURightFill as ArrowURightFillIcon, ArrowURightFill as SiArrowURightFill };
export default ArrowURightFill;
export type { ArrowURightFillProps };
