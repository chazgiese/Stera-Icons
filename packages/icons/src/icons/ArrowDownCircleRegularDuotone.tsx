import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.25c.41 0 .75.34.75.75v6.19l2.72-2.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4q-.22.22-.53.22t-.53-.22l-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.72 2.72V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownCircleRegularDuotone.displayName = 'ArrowDownCircleRegularDuotone';

// Triple export pattern
export { ArrowDownCircleRegularDuotone, ArrowDownCircleRegularDuotone as ArrowDownCircleRegularDuotoneIcon, ArrowDownCircleRegularDuotone as SiArrowDownCircleRegularDuotone };
export default ArrowDownCircleRegularDuotone;
export type { ArrowDownCircleRegularDuotoneProps };
