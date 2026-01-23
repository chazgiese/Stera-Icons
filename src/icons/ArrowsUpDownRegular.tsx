import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down" {...props}>
      <path fill="currentColor" d="M17 3.25c.41 0 .75.34.75.75v16.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4c-.27.27-.7.3-1 .05l-.06-.05-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4c0-.41.34-.75.75-.75M7 2.25q.31 0 .53.22l4 4a.75.75 0 1 1-1.06 1.06L7.75 4.81V21a.75.75 0 0 1-1.5 0V4.81L3.53 7.53a.75.75 0 1 1-1.06-1.06l4-4 .11-.1A1 1 0 0 1 7 2.26" />
    </IconBase>
  ))
);

ArrowsUpDownRegular.displayName = 'ArrowsUpDownRegular';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownRegular, ArrowsUpDownRegular as ArrowsUpDownRegularIcon, ArrowsUpDownRegular as SiArrowsUpDownRegular };
export default ArrowsUpDownRegular;
export type { ArrowsUpDownRegularProps };
