import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClipboardTextFillProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextFill = memo(
  forwardRef<SVGSVGElement, ClipboardTextFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.75 3.75a2.5 2.5 0 0 0 2.5 2.5h5.5a2.5 2.5 0 0 0 2.5-2.5V3h.5C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 19.75V6.25C3 4.45 4.46 3 6.25 3h.5zM8.5 13.88a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
        <path fill="currentColor" d="M14.75 1.25a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ClipboardTextFill.displayName = 'ClipboardTextFill';

export { ClipboardTextFill };
export type { ClipboardTextFillProps };
