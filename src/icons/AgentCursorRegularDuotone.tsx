import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-cursor-duotone" {...props}>
      <path d="M19.25 10.79v-.39c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05h-3.2c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h.38a.75.75 0 0 1 0 1.5h-.38q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06h3.2q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.39a.75.75 0 0 1-1.5 0" opacity={.4} />
        <path fillRule="evenodd" d="m12.84 11.32.2.04 7.8 2.6c1.23.42 1.2 2.16-.04 2.53l-3.33.98-.98 3.33a1.32 1.32 0 0 1-2.52.05l-2.6-7.82a1.32 1.32 0 0 1 1.47-1.71m2.37 8.5.93-3.17a.8.8 0 0 1 .51-.5l3.18-.94-6.93-2.3z" clipRule="evenodd" />
        <path d="M8.53 14.5a.75.75 0 0 1 1.06 1.06l-1.05 1.06a.75.75 0 0 1-1.06-1.06zM6.28 10.5c.1-.4.51-.64.91-.53l1.45.39a.75.75 0 0 1-.4 1.45l-1.43-.4a.75.75 0 0 1-.53-.9M15.56 7.48a.75.75 0 0 1 1.06 1.06l-1.06 1.05a.75.75 0 0 1-1.06-1.06zM10.5 6.28c.4-.11.81.13.92.53l.38 1.44a.75.75 0 0 1-1.44.39l-.4-1.45c-.1-.4.14-.8.54-.91" />
    </IconBase>
  ))
);

AgentCursorRegularDuotone.displayName = 'AgentCursorRegularDuotone';

// Triple export pattern (lucide-react style)
export { AgentCursorRegularDuotone, AgentCursorRegularDuotone as AgentCursorRegularDuotoneIcon, AgentCursorRegularDuotone as SiAgentCursorRegularDuotone };
export default AgentCursorRegularDuotone;
export type { AgentCursorRegularDuotoneProps };
