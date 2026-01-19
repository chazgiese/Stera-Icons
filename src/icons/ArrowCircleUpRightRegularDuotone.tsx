import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m14.14 1.06A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.54 7.71a.75.75 0 0 1 .75.75v7.08a.75.75 0 0 1-1.5 0v-5.26l-5.8 5.79A.75.75 0 1 1 7.94 15l5.8-5.79H8.45a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowCircleUpRightRegularDuotone.displayName = 'ArrowCircleUpRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightRegularDuotone, ArrowCircleUpRightRegularDuotone as ArrowCircleUpRightRegularDuotoneIcon, ArrowCircleUpRightRegularDuotone as SiArrowCircleUpRightRegularDuotone };
export default ArrowCircleUpRightRegularDuotone;
export type { ArrowCircleUpRightRegularDuotoneProps };
