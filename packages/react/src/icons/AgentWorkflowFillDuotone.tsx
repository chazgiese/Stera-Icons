import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AgentWorkflowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentWorkflowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 11a1 1 0 1 1 0 2 2 2 0 0 0-2 2v.25c0 1.24 1 2.25 2.25 2.25H17v-2a1 1 0 0 1 1.7-.7l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.7-.7v-2H6.25A4.25 4.25 0 0 1 2 15.25V15a4 4 0 0 1 4-4M5.5 2a3.5 3.5 0 0 1 3.35 2.5h8.9C20.1 4.5 22 6.4 22 8.75V9a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2v-.25c0-1.24-1-2.25-2.25-2.25h-8.9A3.5 3.5 0 1 1 5.5 2" opacity={0.4} />
        <path fill="currentColor" d="M11.53 8.35a.5.5 0 0 1 .94 0l.19.53a4 4 0 0 0 2.46 2.46l.53.19a.5.5 0 0 1 0 .94l-.53.19a4 4 0 0 0-2.46 2.46l-.19.53a.5.5 0 0 1-.94 0l-.19-.53a4 4 0 0 0-2.46-2.46l-.53-.19a.5.5 0 0 1 0-.94l.53-.19a4 4 0 0 0 2.46-2.46z" />
    </IconBase>
  ))
);

AgentWorkflowFillDuotone.displayName = 'AgentWorkflowFillDuotone';

// Triple export pattern (lucide-react style)
export { AgentWorkflowFillDuotone, AgentWorkflowFillDuotone as AgentWorkflowFillDuotoneIcon, AgentWorkflowFillDuotone as SiAgentWorkflowFillDuotone };
export type { AgentWorkflowFillDuotoneProps };
