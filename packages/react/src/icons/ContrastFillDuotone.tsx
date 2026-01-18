import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ContrastFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M23 12a11 11 0 0 1-11 11V1a11 11 0 0 1 11 11" />
        <path fill="currentColor" d="M12 23a11 11 0 0 1 0-22z" opacity={.4} />
    </IconBase>
  ))
);

ContrastFillDuotone.displayName = 'ContrastFillDuotone';

// Triple export pattern (lucide-react style)
export { ContrastFillDuotone, ContrastFillDuotone as ContrastFillDuotoneIcon, ContrastFillDuotone as SiContrastFillDuotone };
export type { ContrastFillDuotoneProps };
