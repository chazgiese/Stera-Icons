import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.6 4.4A10.75 10.75 0 1 1 4.4 19.6 10.75 10.75 0 0 1 19.6 4.4m-3.36 3.36a1 1 0 0 0-1.41 0l-5.37 5.36V8.46a1 1 0 1 0-2 0v7.08a1 1 0 0 0 1 1h7.08a1 1 0 1 0 0-2h-4.66l5.36-5.37a1 1 0 0 0 0-1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFill.displayName = 'ArrowCircleDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftFill, ArrowCircleDownLeftFill as ArrowCircleDownLeftFillIcon, ArrowCircleDownLeftFill as SiArrowCircleDownLeftFill };
export default ArrowCircleDownLeftFill;
export type { ArrowCircleDownLeftFillProps };
