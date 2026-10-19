import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusSquareFillProps = Omit<IconBaseProps, 'children'>;

const PlusSquareFill = memo(
  forwardRef<SVGSVGElement, PlusSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-1 4.88c-.48 0-.87.39-.87.87v3.12H8c-.48 0-.87.4-.87.88s.39.87.87.87h3.13V16c0 .48.4.88.87.88.49 0 .88-.4.88-.88v-3.13H16c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusSquareFill.displayName = 'PlusSquareFill';

// Triple export pattern
export { PlusSquareFill, PlusSquareFill as PlusSquareFillIcon, PlusSquareFill as SiPlusSquareFill };
export default PlusSquareFill;
export type { PlusSquareFillProps };
