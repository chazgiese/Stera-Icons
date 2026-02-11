import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorRegularProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorRegular = memo(
  forwardRef<SVGSVGElement, MacWindowCursorRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-cursor" {...props}>
      <path fillRule="evenodd" d="m14.95 11.52.19.04 6.76 2.26a1.24 1.24 0 0 1-.04 2.37l-2.84.83-.83 2.84a1.24 1.24 0 0 1-2.37.04l-2.26-6.76c-.3-.91.5-1.78 1.4-1.62m2.03 7.13.72-2.44.03-.1q.15-.31.48-.41l2.44-.72-5.5-1.83z" clipRule="evenodd" />
        <path d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V11a.75.75 0 0 1-1.5 0V9.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H7.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v4.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04H13a.75.75 0 0 1 0 1.5H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" />
        <path d="M6.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M10.25 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

MacWindowCursorRegular.displayName = 'MacWindowCursorRegular';

// Triple export pattern (lucide-react style)
export { MacWindowCursorRegular, MacWindowCursorRegular as MacWindowCursorRegularIcon, MacWindowCursorRegular as SiMacWindowCursorRegular };
export default MacWindowCursorRegular;
export type { MacWindowCursorRegularProps };
