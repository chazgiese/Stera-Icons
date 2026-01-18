import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardRegularProps = Omit<IconBaseProps, 'children'>;

const ClipboardRegular = memo(
  forwardRef<SVGSVGElement, ClipboardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.75 1.25a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6.25a3 3 0 0 1-3-3V6.25a3 3 0 0 1 3-3h1c0-1.1.9-2 2-2zm-8.5 3.5c-.83 0-1.5.67-1.5 1.5v13.5c0 .83.67 1.5 1.5 1.5h11.5c.83 0 1.5-.67 1.5-1.5V6.25c0-.83-.67-1.5-1.5-1.5h-1a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2zm3-2a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardRegular.displayName = 'ClipboardRegular';

// Triple export pattern (lucide-react style)
export { ClipboardRegular, ClipboardRegular as ClipboardRegularIcon, ClipboardRegular as SiClipboardRegular };
export type { ClipboardRegularProps };
