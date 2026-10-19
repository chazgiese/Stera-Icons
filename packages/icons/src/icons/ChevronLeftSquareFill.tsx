import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftSquareFillProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftSquareFill = memo(
  forwardRef<SVGSVGElement, ChevronLeftSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm1.12 5.13c-.34-.34-.9-.34-1.24 0l-4 4q-.25.26-.26.62.01.36.26.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24L10.74 12l3.38-3.38c.34-.34.34-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronLeftSquareFill.displayName = 'ChevronLeftSquareFill';

// Triple export pattern
export { ChevronLeftSquareFill, ChevronLeftSquareFill as ChevronLeftSquareFillIcon, ChevronLeftSquareFill as SiChevronLeftSquareFill };
export default ChevronLeftSquareFill;
export type { ChevronLeftSquareFillProps };
