import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-bold-duotone" {...props}>
      <path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29-.7.7a1 1 0 0 0 0 1.42l-7-7a1 1 0 0 1 0-1.42" opacity={.4} />
        <path d="M18.3 8.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

ChevronDownBoldDuotone.displayName = 'ChevronDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronDownBoldDuotone, ChevronDownBoldDuotone as ChevronDownBoldDuotoneIcon, ChevronDownBoldDuotone as SiChevronDownBoldDuotone };
export default ChevronDownBoldDuotone;
export type { ChevronDownBoldDuotoneProps };
