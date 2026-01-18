import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" opacity={.4} />
    </IconBase>
  ))
);

MoreVBoldDuotone.displayName = 'MoreVBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreVBoldDuotone, MoreVBoldDuotone as MoreVBoldDuotoneIcon, MoreVBoldDuotone as SiMoreVBoldDuotone };
export type { MoreVBoldDuotoneProps };
