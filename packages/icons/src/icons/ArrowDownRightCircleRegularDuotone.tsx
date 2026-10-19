import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.42c.41 0 .75.34.75.75v5.66q0 .31-.22.53-.22.21-.53.22H9.17c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.85L8.64 9.7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l4.38 4.38V9.17c0-.41.33-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownRightCircleRegularDuotone.displayName = 'ArrowDownRightCircleRegularDuotone';

// Triple export pattern
export { ArrowDownRightCircleRegularDuotone, ArrowDownRightCircleRegularDuotone as ArrowDownRightCircleRegularDuotoneIcon, ArrowDownRightCircleRegularDuotone as SiArrowDownRightCircleRegularDuotone };
export default ArrowDownRightCircleRegularDuotone;
export type { ArrowDownRightCircleRegularDuotoneProps };
