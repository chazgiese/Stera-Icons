import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XFillDuotone = memo(
  forwardRef<SVGSVGElement, XFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 14.12-5.94 5.94a1.5 1.5 0 0 1-2.12-2.12L9.88 12zM17.94 3.94a1.5 1.5 0 0 1 2.12 2.12L14.12 12 12 9.88z" opacity={0.4} />
        <path fill="currentColor" d="M3.94 3.94a1.5 1.5 0 0 1 2.12 0l14 14a1.5 1.5 0 0 1-2.12 2.12l-14-14a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

XFillDuotone.displayName = 'XFillDuotone';

// Triple export pattern (lucide-react style)
export { XFillDuotone, XFillDuotone as XFillDuotoneIcon, XFillDuotone as SiXFillDuotone };
export type { XFillDuotoneProps };
