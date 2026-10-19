import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m.62 5.63c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.5 2.5H8c-.48 0-.87.4-.87.88s.39.88.87.88h5.89l-2.5 2.5c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l4-4q.24-.26.25-.62 0-.36-.25-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.38c.34-.34.9-.34 1.24 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.5-2.5H8c-.48 0-.87-.4-.87-.88s.39-.88.87-.88h5.89l-2.5-2.5c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

ArrowRightCircleFillDuotone.displayName = 'ArrowRightCircleFillDuotone';

// Triple export pattern
export { ArrowRightCircleFillDuotone, ArrowRightCircleFillDuotone as ArrowRightCircleFillDuotoneIcon, ArrowRightCircleFillDuotone as SiArrowRightCircleFillDuotone };
export default ArrowRightCircleFillDuotone;
export type { ArrowRightCircleFillDuotoneProps };
