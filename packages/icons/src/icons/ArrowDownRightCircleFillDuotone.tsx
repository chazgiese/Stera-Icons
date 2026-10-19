import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2.83 6.55c-.48 0-.88.39-.88.87v3.55L9.8 8.55c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4.17 4.16H9.17c-.48 0-.87.4-.87.88s.39.87.87.87h5.66q.36 0 .62-.25.25-.26.25-.62V9.17c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.3c.48 0 .87.39.87.87v5.66q0 .36-.25.62-.26.25-.62.25H9.17c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h3.55L8.55 9.8c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l4.16 4.17V9.17c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowDownRightCircleFillDuotone.displayName = 'ArrowDownRightCircleFillDuotone';

// Triple export pattern
export { ArrowDownRightCircleFillDuotone, ArrowDownRightCircleFillDuotone as ArrowDownRightCircleFillDuotoneIcon, ArrowDownRightCircleFillDuotone as SiArrowDownRightCircleFillDuotone };
export default ArrowDownRightCircleFillDuotone;
export type { ArrowDownRightCircleFillDuotoneProps };
