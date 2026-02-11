import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right-fill-duotone" {...props}>
      <path d="M19.3 12.8a1 1 0 0 1 1.7.7V20a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-.7-1.7zM10.5 3a1 1 0 0 1 .7 1.7l-6.5 6.5a1 1 0 0 1-1.7-.7V4a1 1 0 0 1 1-1z" />
        <path d="m16.75 15.34-1.41 1.41-8.09-8.09 1.41-1.41z" opacity={.4} />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFillDuotone.displayName = 'ArrowUpLeftDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightFillDuotone, ArrowUpLeftDownRightFillDuotone as ArrowUpLeftDownRightFillDuotoneIcon, ArrowUpLeftDownRightFillDuotone as SiArrowUpLeftDownRightFillDuotone };
export default ArrowUpLeftDownRightFillDuotone;
export type { ArrowUpLeftDownRightFillDuotoneProps };
