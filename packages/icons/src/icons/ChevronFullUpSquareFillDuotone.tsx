import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-.11 6.72c-.45-.58-1.33-.58-1.78 0L8.12 12.8c-.57.74-.04 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M11.11 8.97c.45-.58 1.33-.58 1.78 0l2.99 3.84c.57.74.04 1.81-.9 1.82H9.02c-.93 0-1.46-1.08-.89-1.82z" />
    </IconBase>
  ))
);

ChevronFullUpSquareFillDuotone.displayName = 'ChevronFullUpSquareFillDuotone';

// Triple export pattern
export { ChevronFullUpSquareFillDuotone, ChevronFullUpSquareFillDuotone as ChevronFullUpSquareFillDuotoneIcon, ChevronFullUpSquareFillDuotone as SiChevronFullUpSquareFillDuotone };
export default ChevronFullUpSquareFillDuotone;
export type { ChevronFullUpSquareFillDuotoneProps };
