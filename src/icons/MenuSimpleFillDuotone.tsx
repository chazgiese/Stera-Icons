import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-fill-duotone" {...props}>
      <path fill="currentColor" d="M14 14.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M20 6.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuSimpleFillDuotone.displayName = 'MenuSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleFillDuotone, MenuSimpleFillDuotone as MenuSimpleFillDuotoneIcon, MenuSimpleFillDuotone as SiMenuSimpleFillDuotone };
export default MenuSimpleFillDuotone;
export type { MenuSimpleFillDuotoneProps };
