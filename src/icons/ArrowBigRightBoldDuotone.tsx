import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M9.5 8a1 1 0 0 0 1 1H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5a1 1 0 0 0-1 1v1H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h3.5z" opacity={.4} />
        <path fill="currentColor" d="M9.5 3.2c0-1.33 1.62-2 2.56-1.05l8.26 8.26c.88.88.88 2.3 0 3.18l-8.26 8.26A1.5 1.5 0 0 1 9.5 20.8V16a1 1 0 0 1 2 0v3.59l7.4-7.41c.1-.1.1-.26 0-.36l-7.4-7.4V8a1 1 0 0 1-2 0z" />
    </IconBase>
  ))
);

ArrowBigRightBoldDuotone.displayName = 'ArrowBigRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigRightBoldDuotone, ArrowBigRightBoldDuotone as ArrowBigRightBoldDuotoneIcon, ArrowBigRightBoldDuotone as SiArrowBigRightBoldDuotone };
export default ArrowBigRightBoldDuotone;
export type { ArrowBigRightBoldDuotoneProps };
