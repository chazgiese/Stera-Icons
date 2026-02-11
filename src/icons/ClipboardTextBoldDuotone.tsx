import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-text-bold-duotone" {...props}>
      <path d="M17.75 3C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 19.75V6.25C3 4.45 4.46 3 6.25 3h.76L7 3.25v1.5l.01.25h-.76C5.56 5 5 5.56 5 6.25v13.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V6.25C19 5.56 18.44 5 17.75 5h-.76l.01-.25v-1.5L16.99 3z" opacity={.4} />
        <path d="M15.5 13.75a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM15.5 10.25a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M14.75 1C15.99 1 17 2 17 3.25v1.5C17 5.99 16 7 14.75 7h-5.5C8.01 7 7 6 7 4.75v-1.5C7 2.01 8 1 9.25 1zm-5.5 2a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h5.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardTextBoldDuotone.displayName = 'ClipboardTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardTextBoldDuotone, ClipboardTextBoldDuotone as ClipboardTextBoldDuotoneIcon, ClipboardTextBoldDuotone as SiClipboardTextBoldDuotone };
export default ClipboardTextBoldDuotone;
export type { ClipboardTextBoldDuotoneProps };
