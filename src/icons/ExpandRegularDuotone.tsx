import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExpandRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-duotone" {...props}>
      <path d="M14.47 14.47c.3-.3.77-.3 1.06 0l3.72 3.72v1.06h-1.06l-3.72-3.72a.75.75 0 0 1 0-1.06M8.47 14.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H4.75v-1.06zM9.53 8.47a.75.75 0 1 1-1.06 1.06L4.75 5.81V4.75h1.06zM19.25 4.75v1.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72z" opacity={0.4} />
        <path fill="currentColor" d="M4 15.25c.41 0 .75.34.75.75v3.25H8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75M20 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1 0-1.5h3.25V16c0-.41.34-.75.75-.75M8 3.25a.75.75 0 0 1 0 1.5H4.75V8a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75zM20 3.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V4.75H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ExpandRegularDuotone.displayName = 'ExpandRegularDuotone';

// Triple export pattern (lucide-react style)
export { ExpandRegularDuotone, ExpandRegularDuotone as ExpandRegularDuotoneIcon, ExpandRegularDuotone as SiExpandRegularDuotone };
export default ExpandRegularDuotone;
export type { ExpandRegularDuotoneProps };
