import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-bold" {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v5.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V8a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownBold.displayName = 'ArrowCircleDownBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownBold, ArrowCircleDownBold as ArrowCircleDownBoldIcon, ArrowCircleDownBold as SiArrowCircleDownBold };
export default ArrowCircleDownBold;
export type { ArrowCircleDownBoldProps };
