import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-duotone" {...props}>
      <path d="M8.47 14.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72H3.75v-1.06zM20.25 3.75v1.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72z" opacity={0.4} />
        <path d="M3 14.25c.41 0 .75.34.75.75v5.25H9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-6c0-.41.34-.75.75-.75M21 2.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V3.75H15a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ExpandSimpleRegularDuotone.displayName = 'ExpandSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleRegularDuotone, ExpandSimpleRegularDuotone as ExpandSimpleRegularDuotoneIcon, ExpandSimpleRegularDuotone as SiExpandSimpleRegularDuotone };
export default ExpandSimpleRegularDuotone;
export type { ExpandSimpleRegularDuotoneProps };
