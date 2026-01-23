import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-alt-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M21 7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleAltBoldDuotone.displayName = 'MenuSimpleAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltBoldDuotone, MenuSimpleAltBoldDuotone as MenuSimpleAltBoldDuotoneIcon, MenuSimpleAltBoldDuotone as SiMenuSimpleAltBoldDuotone };
export default MenuSimpleAltBoldDuotone;
export type { MenuSimpleAltBoldDuotoneProps };
