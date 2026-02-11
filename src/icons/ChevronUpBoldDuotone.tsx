import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-bold-duotone" {...props}>
      <path d="M19.7 14.3a1 1 0 1 1-1.4 1.4L12 9.42l.7-.7a1 1 0 0 0 0-1.42z" opacity={.4} />
        <path d="M11.3 7.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4-1.4z" />
    </IconBase>
  ))
);

ChevronUpBoldDuotone.displayName = 'ChevronUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronUpBoldDuotone, ChevronUpBoldDuotone as ChevronUpBoldDuotoneIcon, ChevronUpBoldDuotone as SiChevronUpBoldDuotone };
export default ChevronUpBoldDuotone;
export type { ChevronUpBoldDuotoneProps };
