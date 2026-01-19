import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorNavigationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.99 2.79a2.25 2.25 0 0 1 4.02 0l8.1 16.2a2.25 2.25 0 0 1-3.09 2.98L12 18.14l-7.02 3.83a2.25 2.25 0 0 1-3.1-2.98zm2.23.9a.25.25 0 0 0-.44 0l-8.1 16.2a.2.2 0 0 0-.03.15q0 .07.08.13.07.07.13.08t.16-.04l7.5-4.09a1 1 0 0 1 .96 0l7.5 4.1q.1.04.16.03.07-.01.13-.08.07-.06.08-.13.02-.05-.03-.16z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.78 3.68c.09-.18.35-.18.44 0l8.1 16.2q.05.12.03.16 0 .07-.08.13a.3.3 0 0 1-.13.08q-.06.01-.16-.04l-7.5-4.09a1 1 0 0 0-.96 0l-7.5 4.1a.2.2 0 0 1-.16.03.3.3 0 0 1-.13-.08.3.3 0 0 1-.08-.13q0-.04.03-.16z" opacity={.4} />
    </IconBase>
  ))
);

CursorNavigationFillDuotone.displayName = 'CursorNavigationFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationFillDuotone, CursorNavigationFillDuotone as CursorNavigationFillDuotoneIcon, CursorNavigationFillDuotone as SiCursorNavigationFillDuotone };
export default CursorNavigationFillDuotone;
export type { CursorNavigationFillDuotoneProps };
