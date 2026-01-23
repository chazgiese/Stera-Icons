import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-down-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 8a1 1 0 0 0-.7.3L16.58 10H7.4l-1.7-1.7A1 1 0 0 0 5 8z" opacity={.4} />
        <path fill="currentColor" d="M18.3 8.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronFullDownBoldDuotone.displayName = 'ChevronFullDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullDownBoldDuotone, ChevronFullDownBoldDuotone as ChevronFullDownBoldDuotoneIcon, ChevronFullDownBoldDuotone as SiChevronFullDownBoldDuotone };
export default ChevronFullDownBoldDuotone;
export type { ChevronFullDownBoldDuotoneProps };
