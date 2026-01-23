import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxFillDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-fill-duotone" {...props}>
      <path d="M1 14h5v.5a1 1 0 1 0 2 0V14h8v.5a1 1 0 1 0 2 0V14h5v2.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8zM18.8 6q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V12h-5v-.5a1 1 0 1 0-2 0v.5H8v-.5a1 1 0 1 0-2 0v.5H1v-1.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 5.99 5.2 6z" opacity={0.4} />
        <path fill="currentColor" d="M9.58 4.5c-.12 0-.23.1-.24.21L9.15 6H7.13l.23-1.57A2.25 2.25 0 0 1 9.58 2.5h4.84c1.12 0 2.07.82 2.22 1.93L16.87 6h-2.02l-.19-1.29a.25.25 0 0 0-.24-.21zM17 10.5a1 1 0 0 1 1 1v.5h5v2h-5v.5a1 1 0 1 1-2 0V14H8v.5a1 1 0 1 1-2 0V14H1v-2h5v-.5a1 1 0 1 1 2 0v.5h8v-.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ToolboxFillDuotone.displayName = 'ToolboxFillDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxFillDuotone, ToolboxFillDuotone as ToolboxFillDuotoneIcon, ToolboxFillDuotone as SiToolboxFillDuotone };
export default ToolboxFillDuotone;
export type { ToolboxFillDuotoneProps };
