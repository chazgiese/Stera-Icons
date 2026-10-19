import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightSquareFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightSquareFill = memo(
  forwardRef<SVGSVGElement, ArrowDownRightSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm1.83 6.05c-.48 0-.88.39-.88.87v3.55L9.8 8.55c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4.17 4.16H9.17c-.48 0-.87.4-.87.88s.39.87.87.87h5.66q.36 0 .62-.25.25-.26.25-.62V9.17c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownRightSquareFill.displayName = 'ArrowDownRightSquareFill';

// Triple export pattern
export { ArrowDownRightSquareFill, ArrowDownRightSquareFill as ArrowDownRightSquareFillIcon, ArrowDownRightSquareFill as SiArrowDownRightSquareFill };
export default ArrowDownRightSquareFill;
export type { ArrowDownRightSquareFillProps };
