import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CliSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zM8.62 8.38a.88.88 0 0 0-1.24 1.24L9.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24l3-3a.9.9 0 0 0 0-1.24zm3.88 5.74a.88.88 0 0 0 0 1.75h4a.87.87 0 1 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38a.9.9 0 0 1 1.24 0l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.24-1.24L9.76 12 7.38 9.62a.9.9 0 0 1 0-1.24M16.5 14.12a.88.88 0 0 1 0 1.75h-4a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

CliSquareFillDuotone.displayName = 'CliSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { CliSquareFillDuotone, CliSquareFillDuotone as CliSquareFillDuotoneIcon, CliSquareFillDuotone as SiCliSquareFillDuotone };
export default CliSquareFillDuotone;
export type { CliSquareFillDuotoneProps };
