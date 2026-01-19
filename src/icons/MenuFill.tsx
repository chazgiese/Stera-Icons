import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuFillProps = Omit<IconBaseProps, 'children'>;

const MenuFill = memo(
  forwardRef<SVGSVGElement, MenuFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-fill" {...props}>
      <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuFill.displayName = 'MenuFill';

// Triple export pattern (lucide-react style)
export { MenuFill, MenuFill as MenuFillIcon, MenuFill as SiMenuFill };
export type { MenuFillProps };
