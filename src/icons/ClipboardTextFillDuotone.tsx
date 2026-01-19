import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clipboard-text-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.01 3 7 3.25v1.5C7 5.99 8 7 9.25 7h5.5C15.99 7 17 6 17 4.75V3.2l-.01-.2h.76C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 19.75V6.25C3 4.45 4.46 3 6.25 3zM8.5 13.75a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm0-3.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.5 13.75a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM15.5 10.25a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zM14.75 1C15.99 1 17 2 17 3.25v1.5C17 5.99 16 7 14.75 7h-5.5C8.01 7 7 6 7 4.75v-1.5C7 2.01 8 1 9.25 1z" />
    </IconBase>
  ))
);

ClipboardTextFillDuotone.displayName = 'ClipboardTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardTextFillDuotone, ClipboardTextFillDuotone as ClipboardTextFillDuotoneIcon, ClipboardTextFillDuotone as SiClipboardTextFillDuotone };
export type { ClipboardTextFillDuotoneProps };
