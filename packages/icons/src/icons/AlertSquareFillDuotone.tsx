import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM12 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.87c-.48 0-.87.39-.87.87V12c0 .48.39.88.87.88s.88-.4.88-.88V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.63c.48 0 .88.39.88.87V12c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlertSquareFillDuotone.displayName = 'AlertSquareFillDuotone';

// Triple export pattern
export { AlertSquareFillDuotone, AlertSquareFillDuotone as AlertSquareFillDuotoneIcon, AlertSquareFillDuotone as SiAlertSquareFillDuotone };
export default AlertSquareFillDuotone;
export type { AlertSquareFillDuotoneProps };
