import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftCircleFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftCircleFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3q-.35 0-.62.25-.25.27-.25.62v5.66c0 .48.39.87.87.87s.88-.39.88-.87v-3.55l4.16 4.17c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4.17-4.16h3.55c.48 0 .87-.4.87-.88s-.39-.87-.87-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowUpLeftCircleFill.displayName = 'ArrowUpLeftCircleFill';

// Triple export pattern
export { ArrowUpLeftCircleFill, ArrowUpLeftCircleFill as ArrowUpLeftCircleFillIcon, ArrowUpLeftCircleFill as SiArrowUpLeftCircleFill };
export default ArrowUpLeftCircleFill;
export type { ArrowUpLeftCircleFillProps };
