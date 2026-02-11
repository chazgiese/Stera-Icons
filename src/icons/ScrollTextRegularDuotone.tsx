import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScrollTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-text-duotone" {...props}>
      <path fillRule="evenodd" d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h1a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75H8.42A2.75 2.75 0 0 1 5.75 18v-7.75h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25zm-4.75 13.5a.5.5 0 0 0-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5zm-4.8-12q.3.57.3 1.25v12a1.25 1.25 0 1 0 2.5 0v-.75c0-1.1.9-2 2-2h6V6c0-.69-.56-1.25-1.25-1.25zm-2.45 0c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2V6c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 10.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM15 7.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScrollTextRegularDuotone.displayName = 'ScrollTextRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScrollTextRegularDuotone, ScrollTextRegularDuotone as ScrollTextRegularDuotoneIcon, ScrollTextRegularDuotone as SiScrollTextRegularDuotone };
export default ScrollTextRegularDuotone;
export type { ScrollTextRegularDuotoneProps };
