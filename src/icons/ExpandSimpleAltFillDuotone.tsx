import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-fill-duotone" {...props}>
      <path d="M14.3 14.3a1 1 0 0 1 1.4 0l2.3 2.29L16.59 18l-2.3-2.3a1 1 0 0 1 0-1.4M9.7 8.3a1 1 0 0 1-1.4 1.4L6 7.42 7.41 6z" opacity={0.4} />
        <path fill="currentColor" d="M20.3 14.3a1 1 0 0 1 1.7.7v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-.7-1.7zM9 2a1 1 0 0 1 .7 1.7l-6 6A1 1 0 0 1 2 9V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ExpandSimpleAltFillDuotone.displayName = 'ExpandSimpleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltFillDuotone, ExpandSimpleAltFillDuotone as ExpandSimpleAltFillDuotoneIcon, ExpandSimpleAltFillDuotone as SiExpandSimpleAltFillDuotone };
export type { ExpandSimpleAltFillDuotoneProps };
