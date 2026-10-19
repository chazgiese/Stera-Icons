import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm3.62 7.63c-.34-.34-.9-.34-1.24 0L12 13.26 8.62 9.88c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4 4q.26.24.62.26.36-.01.62-.26l4-4c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.38 9.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0L12 13.26z" />
    </IconBase>
  ))
);

ChevronDownSquareFillDuotone.displayName = 'ChevronDownSquareFillDuotone';

// Triple export pattern
export { ChevronDownSquareFillDuotone, ChevronDownSquareFillDuotone as ChevronDownSquareFillDuotoneIcon, ChevronDownSquareFillDuotone as SiChevronDownSquareFillDuotone };
export default ChevronDownSquareFillDuotone;
export type { ChevronDownSquareFillDuotoneProps };
