import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m14.14 1.06A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 7.93A.75.75 0 1 1 16.07 9l-5.8 5.79h5.27a.75.75 0 0 1 0 1.5H8.46a.75.75 0 0 1-.75-.75V8.46a.75.75 0 0 1 1.5 0v5.26z" />
    </IconBase>
  ))
);

ArrowCircleDownLeftRegularDuotone.displayName = 'ArrowCircleDownLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftRegularDuotone, ArrowCircleDownLeftRegularDuotone as ArrowCircleDownLeftRegularDuotoneIcon, ArrowCircleDownLeftRegularDuotone as SiArrowCircleDownLeftRegularDuotone };
export default ArrowCircleDownLeftRegularDuotone;
export type { ArrowCircleDownLeftRegularDuotoneProps };
