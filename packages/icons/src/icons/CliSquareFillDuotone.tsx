import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CliSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v2c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-2c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-2c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zM8.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L9.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l3-3q.24-.26.26-.62-.01-.36-.26-.62zm3.88 5.74c-.48 0-.87.4-.87.88s.39.87.87.88h4c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38c.34-.34.9-.34 1.24 0l3 3q.25.26.25.62t-.25.62l-3 3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L9.76 12 7.38 9.62c-.34-.34-.34-.9 0-1.24M16.5 14.12c.48 0 .87.4.87.88s-.39.87-.87.87h-4c-.48 0-.88-.39-.88-.87s.4-.88.88-.88z" />
    </IconBase>
  ))
);

CliSquareFillDuotone.displayName = 'CliSquareFillDuotone';

// Triple export pattern
export { CliSquareFillDuotone, CliSquareFillDuotone as CliSquareFillDuotoneIcon, CliSquareFillDuotone as SiCliSquareFillDuotone };
export default CliSquareFillDuotone;
export type { CliSquareFillDuotoneProps };
