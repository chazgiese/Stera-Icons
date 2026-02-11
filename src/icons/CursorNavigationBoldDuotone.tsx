import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-bold-duotone" {...props}>
      <path d="m21.11 18.24-4.84-9.69a1 1 0 0 1-1.78.91l4.83 9.67q.05.1.03.16 0 .07-.08.13a.3.3 0 0 1-.14.08q-.04.01-.15-.04l-6.5-3.54a1 1 0 0 0-.96 0l-6.5 3.54a.2.2 0 0 1-.16.04.3.3 0 0 1-.13-.08.3.3 0 0 1-.08-.13q-.01-.06.03-.16l4.84-9.68a1 1 0 0 1-1.8-.88L2.9 18.24a2.25 2.25 0 0 0 3.09 2.98L12 17.93l6.02 3.29a2.25 2.25 0 0 0 3.1-2.98" opacity={.4} />
        <path d="M9.99 4.04a2.25 2.25 0 0 1 4.02 0l2.26 4.51a1 1 0 0 1-1.79.9l-2.26-4.52a.25.25 0 0 0-.44 0L9.52 9.45a1 1 0 0 1-1.79-.9z" />
    </IconBase>
  ))
);

CursorNavigationBoldDuotone.displayName = 'CursorNavigationBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationBoldDuotone, CursorNavigationBoldDuotone as CursorNavigationBoldDuotoneIcon, CursorNavigationBoldDuotone as SiCursorNavigationBoldDuotone };
export default CursorNavigationBoldDuotone;
export type { CursorNavigationBoldDuotoneProps };
