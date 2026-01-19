import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollBoldProps = Omit<IconBaseProps, 'children'>;

const ScrollBold = memo(
  forwardRef<SVGSVGElement, ScrollBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 3a3 3 0 0 1 3 3v9h.75c1.24 0 2.25 1 2.25 2.25V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.75c-1.24 0-2.25-1-2.25-2.25V6a3 3 0 0 1 3-3zm-4.75 14a.25.25 0 0 0-.25.25V18a3 3 0 0 1-.17 1h8.17a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25zM7.33 5a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-.75c0-1.24 1-2.25 2.25-2.25h5.75V6a1 1 0 0 0-1-1zM4.5 5a1 1 0 0 0-1 1v2.25c0 .14.11.25.25.25H5.5V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollBold.displayName = 'ScrollBold';

// Triple export pattern (lucide-react style)
export { ScrollBold, ScrollBold as ScrollBoldIcon, ScrollBold as SiScrollBold };
export default ScrollBold;
export type { ScrollBoldProps };
