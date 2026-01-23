import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextRegularProps = Omit<IconBaseProps, 'children'>;

const ScrollTextRegular = memo(
  forwardRef<SVGSVGElement, ScrollTextRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-text" {...props}>
      <path fill="currentColor" d="M13.5 10.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM15 7.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h1a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75H8.42A2.75 2.75 0 0 1 5.75 18v-7.75h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25zm-9.55 1.5q.3.57.3 1.25v12a1.25 1.25 0 1 0 2.5 0v-.75c0-1.1.9-2 2-2h6V6c0-.69-.56-1.25-1.25-1.25zm4.8 12a.5.5 0 0 0-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5zm-7.25-12c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2V6c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextRegular.displayName = 'ScrollTextRegular';

// Triple export pattern (lucide-react style)
export { ScrollTextRegular, ScrollTextRegular as ScrollTextRegularIcon, ScrollTextRegular as SiScrollTextRegular };
export default ScrollTextRegular;
export type { ScrollTextRegularProps };
