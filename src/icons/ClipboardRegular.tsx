import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardRegularProps = Omit<IconBaseProps, 'children'>;

const ClipboardRegular = memo(
  forwardRef<SVGSVGElement, ClipboardRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.25 2.25a2 2 0 0 1 2 2q.4 0 .72.04c.41.03.79.1 1.14.29a3 3 0 0 1 1.31 1.3c.19.37.26.76.3 1.18q.04.61.03 1.54v8.8q0 .93-.03 1.54c-.04.42-.11.8-.3 1.17a3 3 0 0 1-1.3 1.31c-.37.19-.76.26-1.18.3q-.61.04-1.54.03H8.6q-.93 0-1.54-.03c-.42-.04-.8-.11-1.17-.3a3 3 0 0 1-1.31-1.3 3 3 0 0 1-.3-1.18q-.04-.61-.03-1.54V8.6q0-.93.03-1.54c.04-.42.11-.8.3-1.17a3 3 0 0 1 1.3-1.31q.54-.25 1.15-.3l.72-.03c0-1.1.9-2 2-2zm-6.5 3.5q-.35 0-.6.03-.43.05-.58.13a1.5 1.5 0 0 0-.66.66c-.06.12-.1.29-.13.61-.03.34-.03.78-.03 1.42v8.8c0 .64 0 1.08.03 1.42q.04.46.13.61.23.43.66.66c.12.06.29.1.61.13.34.03.78.03 1.42.03h6.8c.64 0 1.08 0 1.42-.03q.46-.04.61-.13.43-.23.66-.66c.06-.12.1-.29.13-.61.03-.34.03-.78.03-1.42V8.6c0-.64 0-1.08-.03-1.42q-.04-.46-.13-.61a1.5 1.5 0 0 0-.66-.66q-.14-.08-.59-.13l-.6-.03a2 2 0 0 1-1.99 2h-4.5a2 2 0 0 1-2-2m2-2a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardRegular.displayName = 'ClipboardRegular';

// Triple export pattern (lucide-react style)
export { ClipboardRegular, ClipboardRegular as ClipboardRegularIcon, ClipboardRegular as SiClipboardRegular };
export default ClipboardRegular;
export type { ClipboardRegularProps };
