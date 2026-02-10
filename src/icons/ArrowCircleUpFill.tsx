import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5a1 1 0 0 0-.7.3l-4 4a1 1 0 1 0 1.4 1.4l2.3-2.29V16a1 1 0 1 0 2 0v-5.59l2.3 2.3a1 1 0 1 0 1.4-1.42l-4-4A1 1 0 0 0 12 7" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpFill.displayName = 'ArrowCircleUpFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFill, ArrowCircleUpFill as ArrowCircleUpFillIcon, ArrowCircleUpFill as SiArrowCircleUpFill };
export default ArrowCircleUpFill;
export type { ArrowCircleUpFillProps };
