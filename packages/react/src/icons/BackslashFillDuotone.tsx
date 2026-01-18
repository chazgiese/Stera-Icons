import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BackslashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashFillDuotone = memo(
  forwardRef<SVGSVGElement, BackslashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m10.88 13 8 9a1.5 1.5 0 0 0 2.24-2l-8-9z" opacity={.4} />
        <path fill="currentColor" d="M5.12 2a1.5 1.5 0 0 0-2.24 2l8 9 2.24-2z" />
    </IconBase>
  ))
);

BackslashFillDuotone.displayName = 'BackslashFillDuotone';

// Triple export pattern (lucide-react style)
export { BackslashFillDuotone, BackslashFillDuotone as BackslashFillDuotoneIcon, BackslashFillDuotone as SiBackslashFillDuotone };
export type { BackslashFillDuotoneProps };
