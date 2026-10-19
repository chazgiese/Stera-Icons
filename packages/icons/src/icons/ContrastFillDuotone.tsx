import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.75 12c0 5.66 4.59 10.25 10.25 10.25V1.75C6.34 1.75 1.75 6.34 1.75 12" opacity={.4} />
        <path d="M22.25 12c0 5.66-4.59 10.25-10.25 10.25V1.75c5.66 0 10.25 4.59 10.25 10.25" />
    </IconBase>
  ))
);

ContrastFillDuotone.displayName = 'ContrastFillDuotone';

// Triple export pattern
export { ContrastFillDuotone, ContrastFillDuotone as ContrastFillDuotoneIcon, ContrastFillDuotone as SiContrastFillDuotone };
export default ContrastFillDuotone;
export type { ContrastFillDuotoneProps };
