import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftSquareFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftSquareFill = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.17 8.3c-.48 0-.87.39-.87.87v5.66q0 .36.25.62.27.25.62.25h5.66c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-3.55l4.17-4.16c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownLeftSquareFill.displayName = 'ArrowDownLeftSquareFill';

// Triple export pattern
export { ArrowDownLeftSquareFill, ArrowDownLeftSquareFill as ArrowDownLeftSquareFillIcon, ArrowDownLeftSquareFill as SiArrowDownLeftSquareFill };
export default ArrowDownLeftSquareFill;
export type { ArrowDownLeftSquareFillProps };
