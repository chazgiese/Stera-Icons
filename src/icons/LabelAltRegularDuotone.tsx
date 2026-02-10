import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-duotone" {...props}>
      <path fill="currentColor" d="M20.06 4.25c1.42 0 2.25 1.6 1.42 2.77l-3.04 4.25a1.25 1.25 0 0 0 0 1.46l3.04 4.25c.83 1.16 0 2.77-1.42 2.77H8.03c-.89 0-1.72-.43-2.24-1.15l-1.9-2.66a.75.75 0 0 0 1.22-.88l1.9 2.67c.24.33.62.52 1.02.52h12.03c.2 0 .32-.23.2-.4l-3.04-4.25a2.75 2.75 0 0 1 0-3.2l3.04-4.25c.12-.17 0-.4-.2-.4H8.03c-.4 0-.78.2-1.02.52l-1.9 2.67a.75.75 0 0 0-1.22-.88l1.9-2.66a2.8 2.8 0 0 1 2.24-1.15z" opacity={.4} />
        <path fill="currentColor" d="M3.89 8.06a.75.75 0 0 1 1.22.88l-1.67 2.33a1.25 1.25 0 0 0 0 1.46l1.67 2.33a.75.75 0 0 1-1.22.88L2.22 13.6a2.75 2.75 0 0 1 0-3.2z" />
    </IconBase>
  ))
);

LabelAltRegularDuotone.displayName = 'LabelAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltRegularDuotone, LabelAltRegularDuotone as LabelAltRegularDuotoneIcon, LabelAltRegularDuotone as SiLabelAltRegularDuotone };
export default LabelAltRegularDuotone;
export type { LabelAltRegularDuotoneProps };
