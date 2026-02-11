import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-bold-duotone" {...props}>
      <path d="M20 11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" opacity={.4} />
        <path d="M14 17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 5a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuAltBoldDuotone.displayName = 'MenuAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { MenuAltBoldDuotone, MenuAltBoldDuotone as MenuAltBoldDuotoneIcon, MenuAltBoldDuotone as SiMenuAltBoldDuotone };
export default MenuAltBoldDuotone;
export type { MenuAltBoldDuotoneProps };
