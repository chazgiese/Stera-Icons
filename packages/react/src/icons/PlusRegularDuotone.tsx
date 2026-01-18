import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 12.75H4a.75.75 0 0 1 0-1.5h7.25zM20 11.25a.75.75 0 0 1 0 1.5h-7.25v-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M12 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PlusRegularDuotone.displayName = 'PlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlusRegularDuotone, PlusRegularDuotone as PlusRegularDuotoneIcon, PlusRegularDuotone as SiPlusRegularDuotone };
export type { PlusRegularDuotoneProps };
