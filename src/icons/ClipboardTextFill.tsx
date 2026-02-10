import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextFillProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextFill = memo(
  forwardRef<SVGSVGElement, ClipboardTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-text-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.96 4.03q.66.04 1.27.32.92.5 1.42 1.42.28.61.32 1.27.04.64.03 1.56v8.8q0 .91-.03 1.56-.04.66-.32 1.27-.5.92-1.42 1.42-.61.28-1.27.32-.64.04-1.56.03H8.6q-.91 0-1.56-.03a3 3 0 0 1-1.27-.32c-.6-.32-1.1-.81-1.42-1.42q-.28-.61-.32-1.27Q4 18.32 4 17.4V8.6q0-.91.03-1.56.04-.66.32-1.27c.32-.6.81-1.1 1.42-1.42q.61-.28 1.27-.32l.34-.02v.74a2.37 2.37 0 0 0 2.37 2.38h4.5a2.37 2.37 0 0 0 2.38-2.38v-.74zM9 13.88a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.74h6a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
        <path fill="currentColor" d="M14.25 2.13c.62 0 1.13.5 1.13 1.12v1.5c0 .62-.5 1.13-1.13 1.13h-4.5c-.62 0-1.12-.5-1.12-1.13v-1.5c0-.62.5-1.12 1.12-1.12z" />
    </IconBase>
  ))
);

ClipboardTextFill.displayName = 'ClipboardTextFill';

// Triple export pattern (lucide-react style)
export { ClipboardTextFill, ClipboardTextFill as ClipboardTextFillIcon, ClipboardTextFill as SiClipboardTextFill };
export default ClipboardTextFill;
export type { ClipboardTextFillProps };
