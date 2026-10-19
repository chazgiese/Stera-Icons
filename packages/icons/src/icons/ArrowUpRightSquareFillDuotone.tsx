import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.17 8.3c-.48 0-.87.39-.87.87s.39.88.87.88h3.55L8.55 14.2c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4.16-4.17v3.55c0 .48.4.87.88.87s.87-.39.87-.87V9.17q0-.35-.25-.62-.26-.25-.62-.25z" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.3q.36 0 .62.25.25.27.25.62v5.66c0 .48-.39.87-.87.87s-.88-.39-.88-.87v-3.55L9.8 15.45c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4.17-4.16H9.17c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowUpRightSquareFillDuotone.displayName = 'ArrowUpRightSquareFillDuotone';

// Triple export pattern
export { ArrowUpRightSquareFillDuotone, ArrowUpRightSquareFillDuotone as ArrowUpRightSquareFillDuotoneIcon, ArrowUpRightSquareFillDuotone as SiArrowUpRightSquareFillDuotone };
export default ArrowUpRightSquareFillDuotone;
export type { ArrowUpRightSquareFillDuotoneProps };
