import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 14.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M21 6.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuSimpleAltFillDuotone.displayName = 'MenuSimpleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltFillDuotone, MenuSimpleAltFillDuotone as MenuSimpleAltFillDuotoneIcon, MenuSimpleAltFillDuotone as SiMenuSimpleAltFillDuotone };
export type { MenuSimpleAltFillDuotoneProps };
