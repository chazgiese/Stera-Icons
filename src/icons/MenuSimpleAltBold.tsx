import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltBold = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-alt-bold" {...props}>
      <path fill="currentColor" d="M15 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleAltBold.displayName = 'MenuSimpleAltBold';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltBold, MenuSimpleAltBold as MenuSimpleAltBoldIcon, MenuSimpleAltBold as SiMenuSimpleAltBold };
export default MenuSimpleAltBold;
export type { MenuSimpleAltBoldProps };
