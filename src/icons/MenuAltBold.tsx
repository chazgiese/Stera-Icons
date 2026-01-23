import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltBoldProps = Omit<IconBaseProps, 'children'>;

const MenuAltBold = memo(
  forwardRef<SVGSVGElement, MenuAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-bold" {...props}>
      <path fill="currentColor" d="M15 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuAltBold.displayName = 'MenuAltBold';

// Triple export pattern (lucide-react style)
export { MenuAltBold, MenuAltBold as MenuAltBoldIcon, MenuAltBold as SiMenuAltBold };
export default MenuAltBold;
export type { MenuAltBoldProps };
