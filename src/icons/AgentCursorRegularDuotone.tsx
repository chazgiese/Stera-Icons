import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-cursor-duotone" {...props}>
      <path fill="currentColor" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34a.75.75 0 0 1-1.5 0c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06h-2c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06a.75.75 0 0 1 0 1.5c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m12.84 11.32.2.04 7.8 2.6c1.23.42 1.2 2.16-.04 2.53l-3.33.98-.98 3.33a1.32 1.32 0 0 1-2.52.05l-2.6-7.82a1.32 1.32 0 0 1 1.47-1.71m2.37 8.5.93-3.17a.8.8 0 0 1 .51-.5l3.18-.94-6.93-2.3z" clipRule="evenodd" />
        <path fill="currentColor" d="M8.53 14.5a.75.75 0 0 1 1.06 1.06l-1.05 1.06a.75.75 0 0 1-1.06-1.06zM6.28 10.5c.1-.4.51-.64.91-.53l1.45.39a.75.75 0 0 1-.4 1.45l-1.43-.4a.75.75 0 0 1-.53-.9M15.56 7.48a.75.75 0 0 1 1.06 1.06l-1.06 1.05a.75.75 0 0 1-1.06-1.06zM10.5 6.28c.4-.11.81.13.92.53l.38 1.44a.75.75 0 0 1-1.44.39l-.4-1.45c-.1-.4.14-.8.54-.91" />
    </IconBase>
  ))
);

AgentCursorRegularDuotone.displayName = 'AgentCursorRegularDuotone';

// Triple export pattern (lucide-react style)
export { AgentCursorRegularDuotone, AgentCursorRegularDuotone as AgentCursorRegularDuotoneIcon, AgentCursorRegularDuotone as SiAgentCursorRegularDuotone };
export default AgentCursorRegularDuotone;
export type { AgentCursorRegularDuotoneProps };
