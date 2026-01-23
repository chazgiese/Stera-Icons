import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuBoldDuotone.displayName = 'MenuBoldDuotone';

// Triple export pattern (lucide-react style)
export { MenuBoldDuotone, MenuBoldDuotone as MenuBoldDuotoneIcon, MenuBoldDuotone as SiMenuBoldDuotone };
export default MenuBoldDuotone;
export type { MenuBoldDuotoneProps };
