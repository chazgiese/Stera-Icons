import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxFillDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-fill-duotone" {...props}>
      <path d="M7 13.88v.62a1 1 0 1 0 2 0v-.62h6v.62a1 1 0 1 0 2 0v-.62h5v1.32q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 16.43 2 15.2v-1.32zM16.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.32h-5v-.62a1 1 0 1 0-2 0v.63H9v-.63a1 1 0 1 0-2 0v.63H2v-.33q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 6 7.8 6z" opacity={0.4} />
        <path fill="currentColor" d="M14.42 2.5c1.12 0 2.07.82 2.22 1.93L16.87 6h-2.02l-.19-1.29a.25.25 0 0 0-.24-.21H9.58c-.12 0-.23.1-.24.21L9.15 6H7.13l.23-1.57A2.25 2.25 0 0 1 9.58 2.5zM16 10.5a1 1 0 0 1 1 1v.63h5v1.74h-5v.63a1 1 0 1 1-2 0v-.62H9v.62a1 1 0 1 1-2 0v-.62H2v-1.76h5v-.62a1 1 0 1 1 2 0v.63h6v-.63a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ToolboxFillDuotone.displayName = 'ToolboxFillDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxFillDuotone, ToolboxFillDuotone as ToolboxFillDuotoneIcon, ToolboxFillDuotone as SiToolboxFillDuotone };
export default ToolboxFillDuotone;
export type { ToolboxFillDuotoneProps };
