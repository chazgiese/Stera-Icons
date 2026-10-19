import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.81c0 .49-.39.88-.87.88s-.87-.4-.87-.88V9.9c0-1.13 0-1.93-.06-2.56-.05-.6-.14-.98-.29-1.26q-.46-.9-1.36-1.36c-.28-.15-.65-.24-1.26-.3-.63-.04-1.43-.04-2.56-.04H9.9c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26-.04.63-.04 1.43-.04 2.56v4.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h.8c.49 0 .88.39.88.87s-.4.88-.87.88H9.9q-1.64.02-2.7-.06c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06z" opacity={.4} />
        <path d="M11.6 12.95c-.28-.83.52-1.63 1.35-1.35l7.82 2.6c1 .34.97 1.75-.04 2.05l-3.46 1.01-1.02 3.47c-.3 1-1.71 1.03-2.04.04zM8.44 14.41c.34-.34.9-.34 1.24 0s.34.9 0 1.24L8.62 16.7c-.34.35-.9.35-1.23 0-.34-.34-.34-.9 0-1.23zM6.15 10.47c.13-.47.61-.75 1.08-.62l1.44.39c.46.12.74.6.62 1.07-.13.46-.6.74-1.07.62l-1.45-.4c-.46-.12-.74-.6-.62-1.06M15.47 7.39c.34-.34.9-.34 1.23 0 .35.34.35.9 0 1.23l-1.05 1.06c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM10.47 6.15c.46-.12.94.16 1.07.62l.39 1.45c.12.46-.16.94-.62 1.07-.47.12-.95-.16-1.08-.62l-.38-1.44c-.13-.47.15-.95.62-1.08" />
    </IconBase>
  ))
);

AgentCursorFillDuotone.displayName = 'AgentCursorFillDuotone';

// Triple export pattern
export { AgentCursorFillDuotone, AgentCursorFillDuotone as AgentCursorFillDuotoneIcon, AgentCursorFillDuotone as SiAgentCursorFillDuotone };
export default AgentCursorFillDuotone;
export type { AgentCursorFillDuotoneProps };
