import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltFill = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-alt-fill" {...props}>
      <path fill="currentColor" d="M15 14.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 6.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuSimpleAltFill.displayName = 'MenuSimpleAltFill';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltFill, MenuSimpleAltFill as MenuSimpleAltFillIcon, MenuSimpleAltFill as SiMenuSimpleAltFill };
export default MenuSimpleAltFill;
export type { MenuSimpleAltFillProps };
