import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M15 16.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 6.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuAltRegularDuotone.displayName = 'MenuAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { MenuAltRegularDuotone, MenuAltRegularDuotone as MenuAltRegularDuotoneIcon, MenuAltRegularDuotone as SiMenuAltRegularDuotone };
export type { MenuAltRegularDuotoneProps };
