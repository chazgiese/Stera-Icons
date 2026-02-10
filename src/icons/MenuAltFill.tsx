import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltFillProps = Omit<IconBaseProps, 'children'>;

const MenuAltFill = memo(
  forwardRef<SVGSVGElement, MenuAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-fill" {...props}>
      <path fill="currentColor" d="M14 16.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 10.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 4.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuAltFill.displayName = 'MenuAltFill';

// Triple export pattern (lucide-react style)
export { MenuAltFill, MenuAltFill as MenuAltFillIcon, MenuAltFill as SiMenuAltFill };
export default MenuAltFill;
export type { MenuAltFillProps };
