import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m4.24 3.24a1 1 0 0 0-1 1v5.66a1 1 0 0 0 2 0v-3.24l3.95 3.95a1 1 0 0 0 1.42-1.42l-3.95-3.95h3.24a1 1 0 0 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFill.displayName = 'ArrowCircleUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftFill, ArrowCircleUpLeftFill as ArrowCircleUpLeftFillIcon, ArrowCircleUpLeftFill as SiArrowCircleUpLeftFill };
export default ArrowCircleUpLeftFill;
export type { ArrowCircleUpLeftFillProps };
