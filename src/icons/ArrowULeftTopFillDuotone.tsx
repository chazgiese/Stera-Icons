import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-fill-duotone" {...props}>
      <path d="M13.5 7a6.5 6.5 0 1 1 0 13H9a1 1 0 1 1 0-2h4.5a4.5 4.5 0 1 0 0-9H9V7z" opacity={.4} />
        <path d="M7.3 3.3A1 1 0 0 1 9 4v8a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.07-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopFillDuotone.displayName = 'ArrowULeftTopFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopFillDuotone, ArrowULeftTopFillDuotone as ArrowULeftTopFillDuotoneIcon, ArrowULeftTopFillDuotone as SiArrowULeftTopFillDuotone };
export default ArrowULeftTopFillDuotone;
export type { ArrowULeftTopFillDuotoneProps };
