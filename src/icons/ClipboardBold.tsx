import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardBoldProps = Omit<IconBaseProps, 'children'>;

const ClipboardBold = memo(
  forwardRef<SVGSVGElement, ClipboardBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-bold" {...props}>
      <path fillRule="evenodd" d="M14.25 2c1.16 0 2.12.88 2.24 2.01l.5.03q.64.03 1.24.31.92.5 1.42 1.42.28.61.32 1.27.04.64.03 1.56v8.8q0 .91-.03 1.56-.04.66-.32 1.27-.5.92-1.42 1.42-.61.28-1.27.32-.64.04-1.56.03H8.6q-.91 0-1.56-.03a3 3 0 0 1-1.27-.32c-.6-.32-1.1-.81-1.42-1.42q-.28-.61-.32-1.27Q4 18.32 4 17.4V8.6q0-.91.03-1.56.04-.66.32-1.27c.32-.6.81-1.1 1.42-1.42q.6-.28 1.23-.31.24-.02.51-.03A2.25 2.25 0 0 1 9.75 2zm2.23 4.01q-.06.51-.32.93l-.03.04-.09.13-.02.03a2 2 0 0 1-.56.5l-.08.05-.1.06-.08.04-.22.09-.08.02-.15.04-.06.02-.18.02h-.03q-.12.02-.23.02h-4.5l-.23-.01H9.5l-.19-.03-.05-.02q-.07 0-.15-.04l-.07-.02-.33-.14-.07-.04a2 2 0 0 1-.43-.32l-.07-.07-.06-.07-.08-.1-.05-.06-.07-.1-.05-.08-.06-.1-.04-.07q-.15-.32-.2-.68v-.04l-.34.02c-.3.03-.42.07-.5.1q-.35.2-.54.55c-.04.08-.09.21-.11.52C6 7.53 6 7.95 6 8.6v8.8c0 .65 0 1.07.03 1.4.02.3.07.44.1.52q.2.35.55.54c.08.04.21.09.52.11.33.03.75.03 1.4.03h6.8c.65 0 1.07 0 1.4-.03.3-.02.44-.07.52-.1q.35-.2.54-.55c.04-.08.09-.21.11-.52.03-.33.03-.75.03-1.4V8.6c0-.65 0-1.07-.03-1.4a1.4 1.4 0 0 0-.1-.52 1.3 1.3 0 0 0-.55-.54c-.08-.04-.2-.08-.5-.11zM9.75 4a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardBold.displayName = 'ClipboardBold';

// Triple export pattern (lucide-react style)
export { ClipboardBold, ClipboardBold as ClipboardBoldIcon, ClipboardBold as SiClipboardBold };
export default ClipboardBold;
export type { ClipboardBoldProps };
