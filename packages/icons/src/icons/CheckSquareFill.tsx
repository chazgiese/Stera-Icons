import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckSquareFillProps = Omit<IconBaseProps, 'children'>;

const CheckSquareFill = memo(
  forwardRef<SVGSVGElement, CheckSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm3.6 6.36c-.37-.33-.92-.3-1.24.05l-4.83 5.26-1.86-2.23c-.3-.37-.86-.42-1.23-.11-.37.3-.42.86-.11 1.23l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02.35-.14.5-.31l.31-.32 4.88-5.33c.33-.36.3-.9-.05-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckSquareFill.displayName = 'CheckSquareFill';

// Triple export pattern
export { CheckSquareFill, CheckSquareFill as CheckSquareFillIcon, CheckSquareFill as SiCheckSquareFill };
export default CheckSquareFill;
export type { CheckSquareFillProps };
