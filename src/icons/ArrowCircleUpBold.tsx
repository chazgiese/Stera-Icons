import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-bold" {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 .7.3l4 4a1 1 0 0 1-1.4 1.4L13 10.43V16a1 1 0 0 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4A1 1 0 0 1 12 7" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpBold.displayName = 'ArrowCircleUpBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpBold, ArrowCircleUpBold as ArrowCircleUpBoldIcon, ArrowCircleUpBold as SiArrowCircleUpBold };
export default ArrowCircleUpBold;
export type { ArrowCircleUpBoldProps };
