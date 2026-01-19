import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 17.59V19h-1.41L5 6.41V5h1.41z" opacity={.4} />
        <path fill="currentColor" d="M20 12.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-6.5a1 1 0 1 1 0-2H19v-5.5a1 1 0 0 1 1-1M10.5 3a1 1 0 1 1 0 2H5v5.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightBoldDuotone.displayName = 'ArrowUpLeftDownRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightBoldDuotone, ArrowUpLeftDownRightBoldDuotone as ArrowUpLeftDownRightBoldDuotoneIcon, ArrowUpLeftDownRightBoldDuotone as SiArrowUpLeftDownRightBoldDuotone };
export default ArrowUpLeftDownRightBoldDuotone;
export type { ArrowUpLeftDownRightBoldDuotoneProps };
