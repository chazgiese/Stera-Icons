import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextBoldProps = Omit<IconBaseProps, 'children'>;

const ScrollTextBold = memo(
  forwardRef<SVGSVGElement, ScrollTextBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-text-bold" {...props}>
      <path d="M13.5 10.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM15 7a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M16.5 3a3 3 0 0 1 3 3v9h.75c1.24 0 2.25 1 2.25 2.25V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.75c-1.24 0-2.25-1-2.25-2.25V6a3 3 0 0 1 3-3zM7.33 5a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-.75c0-1.24 1-2.25 2.25-2.25h5.75V6a1 1 0 0 0-1-1zm4.42 12a.25.25 0 0 0-.25.25V18a3 3 0 0 1-.17 1h8.17a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25zM4.5 5a1 1 0 0 0-1 1v2.25c0 .14.11.25.25.25H5.5V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextBold.displayName = 'ScrollTextBold';

// Triple export pattern (lucide-react style)
export { ScrollTextBold, ScrollTextBold as ScrollTextBoldIcon, ScrollTextBold as SiScrollTextBold };
export default ScrollTextBold;
export type { ScrollTextBoldProps };
