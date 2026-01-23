import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right-duotone" {...props}>
      <path fill="currentColor" d="M19.25 18.19v1.06h-1.06L4.75 5.81V4.75h1.06z" opacity={.4} />
        <path fill="currentColor" d="M20 12.75c.41 0 .75.34.75.75V20c0 .41-.34.75-.75.75h-6.5a.75.75 0 0 1 0-1.5h5.75V13.5c0-.41.34-.75.75-.75M10.5 3.25a.75.75 0 0 1 0 1.5H4.75v5.75a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightRegularDuotone.displayName = 'ArrowUpLeftDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightRegularDuotone, ArrowUpLeftDownRightRegularDuotone as ArrowUpLeftDownRightRegularDuotoneIcon, ArrowUpLeftDownRightRegularDuotone as SiArrowUpLeftDownRightRegularDuotone };
export default ArrowUpLeftDownRightRegularDuotone;
export type { ArrowUpLeftDownRightRegularDuotoneProps };
