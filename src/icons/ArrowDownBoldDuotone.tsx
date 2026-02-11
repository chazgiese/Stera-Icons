import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-bold-duotone" {...props}>
      <path d="M12 4a1 1 0 0 1 1 1v11.59l-1 1-1-1V5a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M18.3 11.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ArrowDownBoldDuotone.displayName = 'ArrowDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownBoldDuotone, ArrowDownBoldDuotone as ArrowDownBoldDuotoneIcon, ArrowDownBoldDuotone as SiArrowDownBoldDuotone };
export default ArrowDownBoldDuotone;
export type { ArrowDownBoldDuotoneProps };
