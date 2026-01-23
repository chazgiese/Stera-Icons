import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandBold = memo(
  forwardRef<SVGSVGElement, ExpandBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-bold" {...props}>
      <path fill="currentColor" d="M8.3 14.3a1 1 0 1 1 1.4 1.4L6.42 19H8a1 1 0 1 1 0 2H4l-.17-.02h-.06l-.06-.02a1 1 0 0 1-.59-.49l-.02-.04A1 1 0 0 1 3 20v-4a1 1 0 1 1 2 0v1.59zM14.3 14.3a1 1 0 0 1 1.4 0l3.3 3.29V16a1 1 0 1 1 2 0v4a1 1 0 0 1-.12.47 1 1 0 0 1-.59.49l-.06.01-.03.01h-.04l-.06.02H16a1 1 0 1 1 0-2h1.59l-3.3-3.3a1 1 0 0 1 0-1.4M8 3a1 1 0 0 1 0 2H6.41l3.3 3.3a1 1 0 1 1-1.42 1.4L5 6.42V8a1 1 0 0 1-2 0V4l.03-.23.01-.06a1 1 0 0 1 .13-.26 1 1 0 0 1 .35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H8M20 3l.16.01h.03l.01.01h.03l.06.02.14.06.04.02a1 1 0 0 1 .49.59l.01.06L21 4v4a1 1 0 1 1-2 0V6.41l-3.3 3.3a1 1 0 1 1-1.4-1.42L17.58 5H16a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ExpandBold.displayName = 'ExpandBold';

// Triple export pattern (lucide-react style)
export { ExpandBold, ExpandBold as ExpandBoldIcon, ExpandBold as SiExpandBold };
export default ExpandBold;
export type { ExpandBoldProps };
