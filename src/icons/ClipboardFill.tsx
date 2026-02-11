import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardFillProps = Omit<IconBaseProps, 'children'>;

const ClipboardFill = memo(
  forwardRef<SVGSVGElement, ClipboardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-fill" {...props}>
      <path d="M16.96 4.05c.44.03.86.11 1.27.32q.92.48 1.42 1.42.28.6.32 1.27.04.63.03 1.55v8.8q0 .93-.03 1.56-.04.67-.32 1.27-.5.93-1.42 1.42-.61.28-1.27.32-.64.04-1.56.03H8.6q-.91 0-1.56-.03a3 3 0 0 1-1.27-.32c-.6-.31-1.1-.8-1.42-1.42q-.28-.6-.32-1.27Q4 18.34 4 17.42v-8.8q0-.93.03-1.56.04-.66.32-1.27.5-.93 1.42-1.42.61-.29 1.27-.32l.34-.02v.73a2.4 2.4 0 0 0 2.37 2.38h4.5a2.37 2.37 0 0 0 2.38-2.38v-.73z" />
        <path d="M14.25 2.13c.62 0 1.13.5 1.13 1.12v1.5c0 .62-.5 1.13-1.13 1.13h-4.5c-.62 0-1.12-.5-1.12-1.13v-1.5c0-.62.5-1.12 1.12-1.12z" />
    </IconBase>
  ))
);

ClipboardFill.displayName = 'ClipboardFill';

// Triple export pattern (lucide-react style)
export { ClipboardFill, ClipboardFill as ClipboardFillIcon, ClipboardFill as SiClipboardFill };
export default ClipboardFill;
export type { ClipboardFillProps };
