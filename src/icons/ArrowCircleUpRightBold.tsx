import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-bold" {...props}>
      <path fill="currentColor" d="M14.83 8.17a1 1 0 0 1 1 1v5.66a1 1 0 1 1-2 0v-3.24l-3.95 3.95a1 1 0 0 1-1.42-1.42l3.95-3.95H9.17a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightBold.displayName = 'ArrowCircleUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightBold, ArrowCircleUpRightBold as ArrowCircleUpRightBoldIcon, ArrowCircleUpRightBold as SiArrowCircleUpRightBold };
export default ArrowCircleUpRightBold;
export type { ArrowCircleUpRightBoldProps };
