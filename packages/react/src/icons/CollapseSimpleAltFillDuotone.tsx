import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m17.5 18.91 2.8 2.8a1 1 0 0 0 1.4-1.42l-2.79-2.79zM3.7 2.3a1 1 0 1 0-1.4 1.4l2.79 2.8L6.5 5.09z" opacity={0.4} />
        <path fill="currentColor" d="M15 14a1 1 0 0 0-1 1v5a1 1 0 0 0 1.7.7l5-5A1 1 0 0 0 20 14zM9.38 3.08a1 1 0 0 0-1.09.21l-5 5A1 1 0 0 0 4 10h5a1 1 0 0 0 1-1V4a1 1 0 0 0-.62-.92" />
    </IconBase>
  ))
);

CollapseSimpleAltFillDuotone.displayName = 'CollapseSimpleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltFillDuotone, CollapseSimpleAltFillDuotone as CollapseSimpleAltFillDuotoneIcon, CollapseSimpleAltFillDuotone as SiCollapseSimpleAltFillDuotone };
export type { CollapseSimpleAltFillDuotoneProps };
