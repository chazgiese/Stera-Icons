import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowCursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-cursor-bold-duotone" {...props}>
      <path d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v1.99a1 1 0 0 1-2 0V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5H6.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.99a1 1 0 0 1 0 2H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" opacity={0.4} />
        <path d="M6.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M9.75 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.25 7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.13 13.11A1.57 1.57 0 0 1 15 11.1l.11.04 7.82 2.6a1.57 1.57 0 0 1-.06 3l-3.2.94-.94 3.2a1.57 1.57 0 0 1-3 .06zM17.2 19l.7-2.4a1 1 0 0 1 .68-.69l2.41-.7-5.7-1.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MacWindowCursorBoldDuotone.displayName = 'MacWindowCursorBoldDuotone';

// Triple export pattern (lucide-react style)
export { MacWindowCursorBoldDuotone, MacWindowCursorBoldDuotone as MacWindowCursorBoldDuotoneIcon, MacWindowCursorBoldDuotone as SiMacWindowCursorBoldDuotone };
export default MacWindowCursorBoldDuotone;
export type { MacWindowCursorBoldDuotoneProps };
