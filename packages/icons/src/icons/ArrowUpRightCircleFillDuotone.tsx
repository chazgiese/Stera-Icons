import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3c-.48 0-.87.39-.87.87 0 .49.39.88.87.88h3.54L8.55 14.2c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4.16-4.16v3.54c0 .48.4.87.88.87s.87-.39.87-.87V9.17q0-.35-.25-.62-.27-.25-.62-.25z" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.3q.36 0 .62.25.24.27.25.62v5.66c0 .48-.39.87-.87.87-.49 0-.88-.39-.88-.87v-3.54L9.8 15.45c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4.16-4.16H9.17c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowUpRightCircleFillDuotone.displayName = 'ArrowUpRightCircleFillDuotone';

// Triple export pattern
export { ArrowUpRightCircleFillDuotone, ArrowUpRightCircleFillDuotone as ArrowUpRightCircleFillDuotoneIcon, ArrowUpRightCircleFillDuotone as SiArrowUpRightCircleFillDuotone };
export default ArrowUpRightCircleFillDuotone;
export type { ArrowUpRightCircleFillDuotoneProps };
