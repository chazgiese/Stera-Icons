import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-bold-duotone" {...props}>
      <path d="M14 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" opacity={.4} />
        <path d="M20 7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleBoldDuotone.displayName = 'MenuSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleBoldDuotone, MenuSimpleBoldDuotone as MenuSimpleBoldDuotoneIcon, MenuSimpleBoldDuotone as SiMenuSimpleBoldDuotone };
export default MenuSimpleBoldDuotone;
export type { MenuSimpleBoldDuotoneProps };
