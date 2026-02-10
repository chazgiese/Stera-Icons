import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuBoldProps = Omit<IconBaseProps, 'children'>;

const MenuBold = memo(
  forwardRef<SVGSVGElement, MenuBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-bold" {...props}>
      <path fill="currentColor" d="M20 17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 5a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuBold.displayName = 'MenuBold';

// Triple export pattern (lucide-react style)
export { MenuBold, MenuBold as MenuBoldIcon, MenuBold as SiMenuBold };
export default MenuBold;
export type { MenuBoldProps };
