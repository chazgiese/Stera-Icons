import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuSimpleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-alt-duotone" {...props}>
      <path fill="currentColor" d="M15 15.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M21 7.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuSimpleAltRegularDuotone.displayName = 'MenuSimpleAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltRegularDuotone, MenuSimpleAltRegularDuotone as MenuSimpleAltRegularDuotoneIcon, MenuSimpleAltRegularDuotone as SiMenuSimpleAltRegularDuotone };
export type { MenuSimpleAltRegularDuotoneProps };
