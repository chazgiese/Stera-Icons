import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardTextBoldProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextBold = memo(
  forwardRef<SVGSVGElement, ClipboardTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 13.75a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM15.5 10.25a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.75 1c1.16 0 2.11.88 2.24 2h.76C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 19.75V6.25C3 4.45 4.46 3 6.25 3h.76c.13-1.12 1.08-2 2.24-2zm-8.5 4C5.56 5 5 5.56 5 6.25v13.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V6.25C19 5.56 18.44 5 17.75 5h-.76a2.25 2.25 0 0 1-2.24 2h-5.5a2.25 2.25 0 0 1-2.24-2zm3-2a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h5.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardTextBold.displayName = 'ClipboardTextBold';

// Triple export pattern (lucide-react style)
export { ClipboardTextBold, ClipboardTextBold as ClipboardTextBoldIcon, ClipboardTextBold as SiClipboardTextBold };
export type { ClipboardTextBoldProps };
