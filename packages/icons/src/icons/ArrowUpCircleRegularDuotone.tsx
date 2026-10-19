import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.25q.31 0 .53.22l4 4c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.72-2.72v6.2c0 .4-.34.74-.75.74s-.75-.34-.75-.75V9.81l-2.72 2.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4-4q.22-.22.53-.22" />
    </IconBase>
  ))
);

ArrowUpCircleRegularDuotone.displayName = 'ArrowUpCircleRegularDuotone';

// Triple export pattern
export { ArrowUpCircleRegularDuotone, ArrowUpCircleRegularDuotone as ArrowUpCircleRegularDuotoneIcon, ArrowUpCircleRegularDuotone as SiArrowUpCircleRegularDuotone };
export default ArrowUpCircleRegularDuotone;
export type { ArrowUpCircleRegularDuotoneProps };
