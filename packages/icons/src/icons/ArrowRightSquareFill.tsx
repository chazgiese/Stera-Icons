import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightSquareFillProps = Omit<IconBaseProps, 'children'>;

const ArrowRightSquareFill = memo(
  forwardRef<SVGSVGElement, ArrowRightSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-.38 5.13c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.5 2.5H8c-.48 0-.87.4-.87.88s.39.88.87.88h5.89l-2.5 2.5c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l4-4q.24-.26.25-.62 0-.36-.25-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowRightSquareFill.displayName = 'ArrowRightSquareFill';

// Triple export pattern
export { ArrowRightSquareFill, ArrowRightSquareFill as ArrowRightSquareFillIcon, ArrowRightSquareFill as SiArrowRightSquareFill };
export default ArrowRightSquareFill;
export type { ArrowRightSquareFillProps };
