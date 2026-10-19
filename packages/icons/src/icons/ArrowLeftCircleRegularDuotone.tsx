import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.72 2.72H16c.41 0 .75.34.75.75s-.34.75-.75.75H9.81l2.72 2.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

ArrowLeftCircleRegularDuotone.displayName = 'ArrowLeftCircleRegularDuotone';

// Triple export pattern
export { ArrowLeftCircleRegularDuotone, ArrowLeftCircleRegularDuotone as ArrowLeftCircleRegularDuotoneIcon, ArrowLeftCircleRegularDuotone as SiArrowLeftCircleRegularDuotone };
export default ArrowLeftCircleRegularDuotone;
export type { ArrowLeftCircleRegularDuotoneProps };
