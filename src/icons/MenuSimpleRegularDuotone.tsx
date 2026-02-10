import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-duotone" {...props}>
      <path fill="currentColor" d="M14 15.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M20 7.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuSimpleRegularDuotone.displayName = 'MenuSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleRegularDuotone, MenuSimpleRegularDuotone as MenuSimpleRegularDuotoneIcon, MenuSimpleRegularDuotone as SiMenuSimpleRegularDuotone };
export default MenuSimpleRegularDuotone;
export type { MenuSimpleRegularDuotoneProps };
