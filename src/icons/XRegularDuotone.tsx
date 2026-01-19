import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const XRegularDuotone = memo(
  forwardRef<SVGSVGElement, XRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-duotone" {...props}>
      <path d="m12 13.06-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12zM18.47 4.47a.75.75 0 1 1 1.06 1.06L13.06 12 12 10.94z" opacity={0.4} />
        <path fill="currentColor" d="M4.47 4.47c.3-.3.77-.3 1.06 0l14 14a.75.75 0 1 1-1.06 1.06l-14-14a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

XRegularDuotone.displayName = 'XRegularDuotone';

// Triple export pattern (lucide-react style)
export { XRegularDuotone, XRegularDuotone as XRegularDuotoneIcon, XRegularDuotone as SiXRegularDuotone };
export type { XRegularDuotoneProps };
