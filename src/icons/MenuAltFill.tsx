import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuAltFillProps = Omit<IconBaseProps, 'children'>;

const MenuAltFill = memo(
  forwardRef<SVGSVGElement, MenuAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-fill" {...props}>
      <path fill="currentColor" d="M15 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuAltFill.displayName = 'MenuAltFill';

// Triple export pattern (lucide-react style)
export { MenuAltFill, MenuAltFill as MenuAltFillIcon, MenuAltFill as SiMenuAltFill };
export default MenuAltFill;
export type { MenuAltFillProps };
