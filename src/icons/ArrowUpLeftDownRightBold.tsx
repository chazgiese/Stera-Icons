import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right-bold" {...props}>
      <path fill="currentColor" d="M10.5 3a1 1 0 1 1 0 2H6.41L19 17.59V13.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1h-6.5a1 1 0 1 1 0-2h4.09L5 6.41v4.09a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightBold.displayName = 'ArrowUpLeftDownRightBold';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightBold, ArrowUpLeftDownRightBold as ArrowUpLeftDownRightBoldIcon, ArrowUpLeftDownRightBold as SiArrowUpLeftDownRightBold };
export default ArrowUpLeftDownRightBold;
export type { ArrowUpLeftDownRightBoldProps };
