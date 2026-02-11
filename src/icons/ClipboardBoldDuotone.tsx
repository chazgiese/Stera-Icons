import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-bold-duotone" {...props}>
      <path d="m16.49 4.01.47.02q.66.04 1.27.32.92.5 1.42 1.42.28.61.32 1.27.04.64.03 1.56v8.8q0 .91-.03 1.56-.04.66-.32 1.27-.5.92-1.42 1.42-.61.28-1.27.32-.64.04-1.56.03H8.6q-.91 0-1.56-.03a3 3 0 0 1-1.27-.32c-.6-.32-1.1-.81-1.42-1.42q-.28-.61-.32-1.27Q4 18.32 4 17.4V8.6q0-.91.03-1.56.04-.66.32-1.27c.32-.6.81-1.1 1.42-1.42q.61-.28 1.27-.32l.47-.02-.01.24v1.5q0 .13.02.26l-.32.02c-.3.02-.44.07-.52.1q-.35.2-.54.55c-.04.08-.09.21-.11.52C6 7.53 6 7.95 6 8.6v8.8c0 .65 0 1.07.03 1.4.02.3.07.44.1.52q.2.35.55.54c.08.04.21.09.52.11.33.03.75.03 1.4.03h6.8c.65 0 1.07 0 1.4-.03.3-.02.44-.07.52-.1q.35-.2.54-.55c.04-.08.09-.21.11-.52.03-.33.03-.75.03-1.4V8.6c0-.65 0-1.07-.03-1.4a1.4 1.4 0 0 0-.1-.52 1.3 1.3 0 0 0-.55-.54 1.4 1.4 0 0 0-.52-.11L16.48 6l.02-.26v-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M14.25 2c1.24 0 2.25 1 2.25 2.25v1.5c0 1.24-1 2.25-2.25 2.25h-4.5C8.51 8 7.5 7 7.5 5.75v-1.5C7.5 3.01 8.5 2 9.75 2zm-4.5 2a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardBoldDuotone.displayName = 'ClipboardBoldDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardBoldDuotone, ClipboardBoldDuotone as ClipboardBoldDuotoneIcon, ClipboardBoldDuotone as SiClipboardBoldDuotone };
export default ClipboardBoldDuotone;
export type { ClipboardBoldDuotoneProps };
