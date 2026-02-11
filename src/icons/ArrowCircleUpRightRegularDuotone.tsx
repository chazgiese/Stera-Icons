import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-duotone" {...props}>
      <path fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.84 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.42a.75.75 0 0 1 .75.75v5.66a.75.75 0 0 1-1.5 0v-3.85L9.7 15.36a.75.75 0 0 1-1.06-1.06l4.38-4.38H9.17a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArrowCircleUpRightRegularDuotone.displayName = 'ArrowCircleUpRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightRegularDuotone, ArrowCircleUpRightRegularDuotone as ArrowCircleUpRightRegularDuotoneIcon, ArrowCircleUpRightRegularDuotone as SiArrowCircleUpRightRegularDuotone };
export default ArrowCircleUpRightRegularDuotone;
export type { ArrowCircleUpRightRegularDuotoneProps };
