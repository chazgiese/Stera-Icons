import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointFillDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="exclamation-point-fill-duotone" {...props}>
      <path d="M12 17a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" opacity={.4} />
        <path d="M12 2.5c.49 0 .95.18 1.28.51s.5.78.47 1.24l-.03.49-.45 8.77-.02.49c-.02.31-.16.62-.4.84q-.37.34-.85.35-.5-.01-.85-.35a1.3 1.3 0 0 1-.4-.84l-.03-.49-.45-8.77-.02-.49c-.02-.46.14-.9.47-1.24s.8-.51 1.28-.51" />
    </IconBase>
  ))
);

ExclamationPointFillDuotone.displayName = 'ExclamationPointFillDuotone';

// Triple export pattern (lucide-react style)
export { ExclamationPointFillDuotone, ExclamationPointFillDuotone as ExclamationPointFillDuotoneIcon, ExclamationPointFillDuotone as SiExclamationPointFillDuotone };
export default ExclamationPointFillDuotone;
export type { ExclamationPointFillDuotoneProps };
