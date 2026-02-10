import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-fill" {...props}>
      <path fill="currentColor" d="M7.3 3.3A1 1 0 0 1 9 4v3h4.5a6.5 6.5 0 1 1 0 13H9a1 1 0 0 1 0-2h4.5a4.5 4.5 0 1 0 0-9H9v3a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.07-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopFill.displayName = 'ArrowULeftTopFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopFill, ArrowULeftTopFill as ArrowULeftTopFillIcon, ArrowULeftTopFill as SiArrowULeftTopFill };
export default ArrowULeftTopFill;
export type { ArrowULeftTopFillProps };
