import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.75 3C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 19.75V6.25C3 4.45 4.46 3 6.25 3h.76L7 3.25v1.5C7 5.99 8 7 9.25 7h5.5C15.99 7 17 6 17 4.75v-1.5L16.99 3z" opacity={.4} />
        <path fill="currentColor" d="M14.75 1C15.99 1 17 2 17 3.25v1.5C17 5.99 16 7 14.75 7h-5.5C8.01 7 7 6 7 4.75v-1.5C7 2.01 8 1 9.25 1z" />
    </IconBase>
  ))
);

ClipboardFillDuotone.displayName = 'ClipboardFillDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardFillDuotone, ClipboardFillDuotone as ClipboardFillDuotoneIcon, ClipboardFillDuotone as SiClipboardFillDuotone };
export type { ClipboardFillDuotoneProps };
