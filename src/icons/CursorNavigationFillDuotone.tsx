import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.78 4.93c.09-.18.35-.18.44 0l7.1 14.2q.05.12.03.16 0 .07-.08.13a.3.3 0 0 1-.13.08q-.06.01-.16-.04l-6.5-3.54a1 1 0 0 0-.84-.06l-.12.06-6.5 3.54a.2.2 0 0 1-.16.04.3.3 0 0 1-.13-.08.3.3 0 0 1-.08-.13q-.01-.04.03-.16z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.99 4.04a2.25 2.25 0 0 1 4.02 0l7.1 14.2a2.25 2.25 0 0 1-3.09 2.98L12 17.93l-6.02 3.29a2.25 2.25 0 0 1-3.1-2.98zm2.23.9a.25.25 0 0 0-.44 0l-7.1 14.2a.2.2 0 0 0-.03.15q0 .07.08.13.07.07.13.08t.16-.04l6.5-3.54.12-.06a1 1 0 0 1 .84.06l6.5 3.54q.1.05.16.04t.13-.08q.07-.06.08-.13.02-.05-.03-.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationFillDuotone.displayName = 'CursorNavigationFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationFillDuotone, CursorNavigationFillDuotone as CursorNavigationFillDuotoneIcon, CursorNavigationFillDuotone as SiCursorNavigationFillDuotone };
export default CursorNavigationFillDuotone;
export type { CursorNavigationFillDuotoneProps };
