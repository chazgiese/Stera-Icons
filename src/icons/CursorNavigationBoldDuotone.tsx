import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorNavigationBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 1.54c.79 0 1.6.42 2.01 1.25l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98l-6.05-3.3a1 1 0 0 0-.48-.13H12v-2h.49a3 3 0 0 1 1.44.37l6.05 3.3q.1.05.16.04t.13-.08q.07-.06.08-.13.02-.06-.03-.16l-8.1-16.2-.09-.1-.13-.04z" />
        <path fill="currentColor" d="M12 3.54q-.08 0-.13.04a.2.2 0 0 0-.1.1l-8.1 16.2a.2.2 0 0 0-.02.16q0 .07.08.13.07.07.13.08t.16-.04l6.05-3.3a3 3 0 0 1 1.44-.37H12v2h-.49a1 1 0 0 0-.48.13l-6.05 3.3a2.25 2.25 0 0 1-3.1-2.98l8.1-16.2A2.2 2.2 0 0 1 12 1.54z" opacity={.4} />
    </IconBase>
  ))
);

CursorNavigationBoldDuotone.displayName = 'CursorNavigationBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationBoldDuotone, CursorNavigationBoldDuotone as CursorNavigationBoldDuotoneIcon, CursorNavigationBoldDuotone as SiCursorNavigationBoldDuotone };
export type { CursorNavigationBoldDuotoneProps };
