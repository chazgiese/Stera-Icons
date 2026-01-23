import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right" {...props}>
      <path fill="currentColor" d="M7.93 7.93c.3-.29.77-.29 1.06 0l5.8 5.8V8.46a.75.75 0 1 1 1.5 0v7.08a.75.75 0 0 1-.75.75H8.46a.75.75 0 0 1 0-1.5h5.26l-5.79-5.8a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m1.06 1.06a9.25 9.25 0 1 0 13.08 13.08A9.25 9.25 0 0 0 5.46 5.46" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightRegular.displayName = 'ArrowCircleDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightRegular, ArrowCircleDownRightRegular as ArrowCircleDownRightRegularIcon, ArrowCircleDownRightRegular as SiArrowCircleDownRightRegular };
export default ArrowCircleDownRightRegular;
export type { ArrowCircleDownRightRegularProps };
