import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-1.88 5.13c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L13.26 12l-3.38 3.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4-4q.24-.26.25-.62 0-.36-.25-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 7.38c.34-.34.9-.34 1.24 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L13.26 12 9.88 8.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

ChevronRightSquareFillDuotone.displayName = 'ChevronRightSquareFillDuotone';

// Triple export pattern
export { ChevronRightSquareFillDuotone, ChevronRightSquareFillDuotone as ChevronRightSquareFillDuotoneIcon, ChevronRightSquareFillDuotone as SiChevronRightSquareFillDuotone };
export default ChevronRightSquareFillDuotone;
export type { ChevronRightSquareFillDuotoneProps };
