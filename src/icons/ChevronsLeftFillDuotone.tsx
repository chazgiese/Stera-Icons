import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M9.94 3.94a1.5 1.5 0 1 1 2.12 2.12L6.12 12l5.94 5.94a1.5 1.5 0 1 1-2.12 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z" />
        <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l5.94 5.94a1.5 1.5 0 1 1-2.12 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftFillDuotone.displayName = 'ChevronsLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsLeftFillDuotone, ChevronsLeftFillDuotone as ChevronsLeftFillDuotoneIcon, ChevronsLeftFillDuotone as SiChevronsLeftFillDuotone };
export default ChevronsLeftFillDuotone;
export type { ChevronsLeftFillDuotoneProps };
