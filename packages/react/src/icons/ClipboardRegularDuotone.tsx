import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.75 3.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6.25a3 3 0 0 1-3-3V6.25a3 3 0 0 1 3-3h1v1.5h-1c-.83 0-1.5.67-1.5 1.5v13.5c0 .83.67 1.5 1.5 1.5h11.5c.83 0 1.5-.67 1.5-1.5V6.25c0-.83-.67-1.5-1.5-1.5h-1v-1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.75 1.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5c0-1.1.9-2 2-2zm-5.5 1.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardRegularDuotone.displayName = 'ClipboardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardRegularDuotone, ClipboardRegularDuotone as ClipboardRegularDuotoneIcon, ClipboardRegularDuotone as SiClipboardRegularDuotone };
export type { ClipboardRegularDuotoneProps };
