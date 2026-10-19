import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3q-.35 0-.62.25-.25.27-.25.62v5.66c0 .48.39.87.87.87s.88-.39.88-.87v-3.54l4.16 4.16c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4.16-4.16h3.54c.48 0 .87-.4.87-.88s-.39-.87-.87-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.3c.48 0 .87.39.87.87s-.39.88-.87.88h-3.54l4.16 4.16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-4.16-4.16v3.54c0 .48-.4.87-.88.87s-.87-.39-.87-.87V9.17q0-.35.25-.62.27-.25.62-.25z" />
    </IconBase>
  ))
);

ArrowUpLeftCircleFillDuotone.displayName = 'ArrowUpLeftCircleFillDuotone';

// Triple export pattern
export { ArrowUpLeftCircleFillDuotone, ArrowUpLeftCircleFillDuotone as ArrowUpLeftCircleFillDuotoneIcon, ArrowUpLeftCircleFillDuotone as SiArrowUpLeftCircleFillDuotone };
export default ArrowUpLeftCircleFillDuotone;
export type { ArrowUpLeftCircleFillDuotoneProps };
