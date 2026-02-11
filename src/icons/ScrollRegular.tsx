import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollRegularProps = Omit<IconBaseProps, 'children'>;

const ScrollRegular = memo(
  forwardRef<SVGSVGElement, ScrollRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll" {...props}>
      <path fillRule="evenodd" d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h1a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75H8.42A2.75 2.75 0 0 1 5.75 18v-7.75h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25zm-4.75 13.5a.5.5 0 0 0-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5zm-4.8-12q.3.57.3 1.25v12a1.25 1.25 0 1 0 2.5 0v-.75c0-1.1.9-2 2-2h6V6c0-.69-.56-1.25-1.25-1.25zm-2.45 0c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2V6c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollRegular.displayName = 'ScrollRegular';

// Triple export pattern (lucide-react style)
export { ScrollRegular, ScrollRegular as ScrollRegularIcon, ScrollRegular as SiScrollRegular };
export default ScrollRegular;
export type { ScrollRegularProps };
