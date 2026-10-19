import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusSquareFillProps = Omit<IconBaseProps, 'children'>;

const MinusSquareFill = memo(
  forwardRef<SVGSVGElement, MinusSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-4.5 8.88c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusSquareFill.displayName = 'MinusSquareFill';

// Triple export pattern
export { MinusSquareFill, MinusSquareFill as MinusSquareFillIcon, MinusSquareFill as SiMinusSquareFill };
export default MinusSquareFill;
export type { MinusSquareFillProps };
