import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScrollRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-duotone" {...props}>
      <path fillRule="evenodd" d="M20.25 15.25a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75h-11v-1.5c.69 0 1.25-.56 1.25-1.25v-.75c0-1.1.9-2 2-2zm-8.5 1.5a.5.5 0 0 0-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5z" clipRule="evenodd" opacity={0.4} />
        <path d="M4.5 4.75c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2v1.5h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25z" opacity={0.4} />
        <path fill="currentColor" d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h-1.5V6c0-.69-.56-1.25-1.25-1.25H6.95q.3.57.3 1.25v12c0 .69.56 1.25 1.25 1.25v1.5A2.75 2.75 0 0 1 5.75 18V6c0-.69-.56-1.25-1.25-1.25v-1.5z" />
    </IconBase>
  ))
);

ScrollRegularDuotone.displayName = 'ScrollRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScrollRegularDuotone, ScrollRegularDuotone as ScrollRegularDuotoneIcon, ScrollRegularDuotone as SiScrollRegularDuotone };
export default ScrollRegularDuotone;
export type { ScrollRegularDuotoneProps };
