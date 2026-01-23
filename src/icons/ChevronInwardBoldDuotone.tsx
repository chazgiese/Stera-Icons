import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronInwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-inward-bold-duotone" {...props}>
      <path fill="currentColor" d="M17.3 2.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4L12 7.58z" />
        <path fill="currentColor" d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L12 16.42l-5.3 5.3a1 1 0 0 1-1.4-1.42z" opacity={.4} />
    </IconBase>
  ))
);

ChevronInwardBoldDuotone.displayName = 'ChevronInwardBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronInwardBoldDuotone, ChevronInwardBoldDuotone as ChevronInwardBoldDuotoneIcon, ChevronInwardBoldDuotone as SiChevronInwardBoldDuotone };
export default ChevronInwardBoldDuotone;
export type { ChevronInwardBoldDuotoneProps };
