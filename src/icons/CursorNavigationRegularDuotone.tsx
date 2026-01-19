import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorNavigationRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-navigation-duotone" {...props}>
      <path fill="currentColor" d="M12 3.3q-.29 0-.45.27l-8.1 16.2a.5.5 0 0 0 .69.66l6.22-3.39a2 2 0 0 1 .96-.25H12v1.5h-.68a1 1 0 0 0-.24.07l-6.22 3.39A2 2 0 0 1 2.1 19.1l8.1-16.2A2 2 0 0 1 12 1.8z" opacity={.4} />
        <path fill="currentColor" d="M12 1.8c.7 0 1.42.36 1.79 1.1l8.1 16.2a2 2 0 0 1-2.75 2.65l-6.22-3.4a1 1 0 0 0-.24-.06H12v-1.5h.68a2 2 0 0 1 .96.25l6.22 3.4a.5.5 0 0 0 .69-.67l-8.1-16.2A.5.5 0 0 0 12 3.3z" />
    </IconBase>
  ))
);

CursorNavigationRegularDuotone.displayName = 'CursorNavigationRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationRegularDuotone, CursorNavigationRegularDuotone as CursorNavigationRegularDuotoneIcon, CursorNavigationRegularDuotone as SiCursorNavigationRegularDuotone };
export type { CursorNavigationRegularDuotoneProps };
