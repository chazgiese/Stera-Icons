import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, XSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM9.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L10.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 13.24l2.38 2.37c.34.34.9.34 1.24 0s.34-.9 0-1.24L13.24 12l2.38-2.37c.34-.35.34-.9 0-1.24s-.9-.34-1.24 0L12 10.76z" clipRule="evenodd" opacity={.4} />
        <path d="M8.38 8.38c.34-.34.9-.34 1.24 0L12 10.76l2.38-2.37c.34-.34.9-.34 1.24 0s.34.9 0 1.24L13.24 12l2.38 2.37c.34.35.34.9 0 1.24s-.9.34-1.24 0L12 13.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L10.76 12 8.38 9.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

XSquareFillDuotone.displayName = 'XSquareFillDuotone';

// Triple export pattern
export { XSquareFillDuotone, XSquareFillDuotone as XSquareFillDuotoneIcon, XSquareFillDuotone as SiXSquareFillDuotone };
export default XSquareFillDuotone;
export type { XSquareFillDuotoneProps };
