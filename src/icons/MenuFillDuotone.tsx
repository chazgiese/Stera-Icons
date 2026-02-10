import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-fill-duotone" {...props}>
      <path fill="currentColor" d="M20 10.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M20 16.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 4.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuFillDuotone.displayName = 'MenuFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuFillDuotone, MenuFillDuotone as MenuFillDuotoneIcon, MenuFillDuotone as SiMenuFillDuotone };
export default MenuFillDuotone;
export type { MenuFillDuotoneProps };
