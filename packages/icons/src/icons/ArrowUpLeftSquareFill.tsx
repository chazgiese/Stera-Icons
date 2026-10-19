import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftSquareFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftSquareFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.17 8.3q-.35 0-.62.25-.25.27-.25.62v5.66c0 .48.39.87.87.87s.88-.39.88-.87v-3.55l4.16 4.17c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4.17-4.16h3.55c.48 0 .87-.4.87-.88s-.39-.87-.87-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowUpLeftSquareFill.displayName = 'ArrowUpLeftSquareFill';

// Triple export pattern
export { ArrowUpLeftSquareFill, ArrowUpLeftSquareFill as ArrowUpLeftSquareFillIcon, ArrowUpLeftSquareFill as SiArrowUpLeftSquareFill };
export default ArrowUpLeftSquareFill;
export type { ArrowUpLeftSquareFillProps };
