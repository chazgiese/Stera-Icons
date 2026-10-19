import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-1 4.88q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.5-2.5V16c0 .48.4.87.88.88.48 0 .87-.4.87-.88v-5.89l2.51 2.5c.34.35.9.35 1.24 0 .34-.33.34-.89 0-1.23l-4-4q-.27-.25-.62-.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13q.36 0 .62.25l4 4c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.5-2.5V16c0 .48-.4.88-.88.88s-.88-.4-.88-.88v-5.89l-2.5 2.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l4-4q.26-.25.62-.25" />
    </IconBase>
  ))
);

ArrowUpSquareFillDuotone.displayName = 'ArrowUpSquareFillDuotone';

// Triple export pattern
export { ArrowUpSquareFillDuotone, ArrowUpSquareFillDuotone as ArrowUpSquareFillDuotoneIcon, ArrowUpSquareFillDuotone as SiArrowUpSquareFillDuotone };
export default ArrowUpSquareFillDuotone;
export type { ArrowUpSquareFillDuotoneProps };
