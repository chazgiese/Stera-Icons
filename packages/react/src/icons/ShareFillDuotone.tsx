import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShareFillDuotone = memo(
  forwardRef<SVGSVGElement, ShareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 8a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h4v7a1 1 0 1 0 2 0V8z" opacity={.4} />
        <path fill="currentColor" d="M11.3 1.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 4.42V15a1 1 0 1 1-2 0V4.41l-2.3 2.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ShareFillDuotone.displayName = 'ShareFillDuotone';

// Triple export pattern (lucide-react style)
export { ShareFillDuotone, ShareFillDuotone as ShareFillDuotoneIcon, ShareFillDuotone as SiShareFillDuotone };
export type { ShareFillDuotoneProps };
