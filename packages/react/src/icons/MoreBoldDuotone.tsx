import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={.4} />
    </IconBase>
  ))
);

MoreBoldDuotone.displayName = 'MoreBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoreBoldDuotone, MoreBoldDuotone as MoreBoldDuotoneIcon, MoreBoldDuotone as SiMoreBoldDuotone };
export type { MoreBoldDuotoneProps };
