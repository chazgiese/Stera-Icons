import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-1.81 5.87c-.74-.57-1.81-.04-1.81.9v5.97c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.38 9.01c0-.93 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" />
    </IconBase>
  ))
);

ChevronFullRightSquareFillDuotone.displayName = 'ChevronFullRightSquareFillDuotone';

// Triple export pattern
export { ChevronFullRightSquareFillDuotone, ChevronFullRightSquareFillDuotone as ChevronFullRightSquareFillDuotoneIcon, ChevronFullRightSquareFillDuotone as SiChevronFullRightSquareFillDuotone };
export default ChevronFullRightSquareFillDuotone;
export type { ChevronFullRightSquareFillDuotoneProps };
