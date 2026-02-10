import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleBold = memo(
  forwardRef<SVGSVGElement, MenuSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-bold" {...props}>
      <path fill="currentColor" d="M14 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleBold.displayName = 'MenuSimpleBold';

// Triple export pattern (lucide-react style)
export { MenuSimpleBold, MenuSimpleBold as MenuSimpleBoldIcon, MenuSimpleBold as SiMenuSimpleBold };
export default MenuSimpleBold;
export type { MenuSimpleBoldProps };
