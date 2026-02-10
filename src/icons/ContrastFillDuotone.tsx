import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-fill-duotone" {...props}>
      <path fill="currentColor" d="M2 12a10 10 0 0 0 10 10V2A10 10 0 0 0 2 12" opacity={.4} />
        <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10V2a10 10 0 0 1 10 10" />
    </IconBase>
  ))
);

ContrastFillDuotone.displayName = 'ContrastFillDuotone';

// Triple export pattern (lucide-react style)
export { ContrastFillDuotone, ContrastFillDuotone as ContrastFillDuotoneIcon, ContrastFillDuotone as SiContrastFillDuotone };
export default ContrastFillDuotone;
export type { ContrastFillDuotoneProps };
