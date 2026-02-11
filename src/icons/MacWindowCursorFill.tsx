import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorFillProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorFill = memo(
  forwardRef<SVGSVGElement, MacWindowCursorFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-cursor-fill" {...props}>
      <path d="m14.98 11.4.2.05 6.76 2.25a1.37 1.37 0 0 1-.05 2.61l-2.77.81-.81 2.77a1.37 1.37 0 0 1-2.6.05l-2.26-6.76c-.34-1 .53-1.96 1.53-1.79" />
        <path d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11a1 1 0 1 1-2 0V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 9.8v4.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
        <path d="M6.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M10.25 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

MacWindowCursorFill.displayName = 'MacWindowCursorFill';

// Triple export pattern (lucide-react style)
export { MacWindowCursorFill, MacWindowCursorFill as MacWindowCursorFillIcon, MacWindowCursorFill as SiMacWindowCursorFill };
export default MacWindowCursorFill;
export type { MacWindowCursorFillProps };
