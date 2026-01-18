import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandFillProps = Omit<IconBaseProps, 'children'>;

const ExpandFill = memo(
  forwardRef<SVGSVGElement, ExpandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.3 14.3a1 1 0 1 1 1.4 1.4L7.42 18l1.3 1.3A1 1 0 0 1 8 21H4l-.17-.02h-.06l-.06-.02a1 1 0 0 1-.59-.49l-.02-.04A1 1 0 0 1 3 20v-4a1 1 0 0 1 1.7-.7L6 16.58zM14.3 14.3a1 1 0 0 1 1.4 0l2.3 2.29 1.3-1.3A1 1 0 0 1 21 16v4a1 1 0 0 1-.12.47 1 1 0 0 1-.59.49l-.06.01-.03.01h-.04L20 21h-4a1 1 0 0 1-.7-1.7l1.29-1.3-2.3-2.3a1 1 0 0 1 0-1.4M8 3a1 1 0 0 1 .7 1.7L7.42 6l2.3 2.3a1 1 0 1 1-1.42 1.4L6 7.42l-1.3 1.3A1 1 0 0 1 3 8V4l.03-.24.01-.05a1 1 0 0 1 .13-.26 1 1 0 0 1 .35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H8M20 3l.16.01h.03l.01.01h.03l.06.02.14.06.04.02a1 1 0 0 1 .49.59l.01.05L21 4v4a1 1 0 0 1-1.7.7L18 7.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L16.58 6l-1.3-1.3A1 1 0 0 1 16 3z" />
    </IconBase>
  ))
);

ExpandFill.displayName = 'ExpandFill';

// Triple export pattern (lucide-react style)
export { ExpandFill, ExpandFill as ExpandFillIcon, ExpandFill as SiExpandFill };
export type { ExpandFillProps };
