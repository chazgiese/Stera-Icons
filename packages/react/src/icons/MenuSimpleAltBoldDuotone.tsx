import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuSimpleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M21 7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleAltBoldDuotone.displayName = 'MenuSimpleAltBoldDuotone';

export { MenuSimpleAltBoldDuotone };
export type { MenuSimpleAltBoldDuotoneProps };
