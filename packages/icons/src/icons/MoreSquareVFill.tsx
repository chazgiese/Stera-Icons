import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFill = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.75 13c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07h2c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34zm-8.37-5c0-.76-.62-1.37-1.38-1.37s-1.37.61-1.37 1.37.61 1.38 1.37 1.38 1.38-.62 1.38-1.38m0 4c0-.76-.62-1.37-1.38-1.37s-1.37.61-1.37 1.37.61 1.38 1.37 1.38 1.38-.62 1.38-1.38m0 4c0-.76-.62-1.37-1.38-1.37s-1.37.61-1.37 1.37.61 1.38 1.37 1.38 1.38-.62 1.38-1.38" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreSquareVFill.displayName = 'MoreSquareVFill';

// Triple export pattern
export { MoreSquareVFill, MoreSquareVFill as MoreSquareVFillIcon, MoreSquareVFill as SiMoreSquareVFill };
export default MoreSquareVFill;
export type { MoreSquareVFillProps };
