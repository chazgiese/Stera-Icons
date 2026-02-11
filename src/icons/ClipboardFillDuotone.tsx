import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-fill-duotone" {...props}>
      <path d="m16.49 4.01.47.02q.66.04 1.27.32.92.5 1.42 1.42.28.61.32 1.27.04.64.03 1.56v8.8q0 .91-.03 1.56-.04.66-.32 1.27-.5.92-1.42 1.42-.61.28-1.27.32-.64.04-1.56.03H8.6q-.91 0-1.56-.03a3 3 0 0 1-1.27-.32c-.6-.32-1.1-.81-1.42-1.42q-.28-.61-.32-1.27Q4 18.32 4 17.4V8.6q0-.91.03-1.56.04-.66.32-1.27c.32-.6.81-1.1 1.42-1.42q.61-.28 1.27-.32l.47-.02-.01.24v1.5C7.5 6.99 8.5 8 9.75 8h4.5c1.24 0 2.25-1 2.25-2.25v-1.5z" opacity={.4} />
        <path d="M14.25 2c1.24 0 2.25 1 2.25 2.25v1.5c0 1.24-1 2.25-2.25 2.25h-4.5C8.51 8 7.5 7 7.5 5.75v-1.5C7.5 3.01 8.5 2 9.75 2z" />
    </IconBase>
  ))
);

ClipboardFillDuotone.displayName = 'ClipboardFillDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardFillDuotone, ClipboardFillDuotone as ClipboardFillDuotoneIcon, ClipboardFillDuotone as SiClipboardFillDuotone };
export default ClipboardFillDuotone;
export type { ClipboardFillDuotoneProps };
