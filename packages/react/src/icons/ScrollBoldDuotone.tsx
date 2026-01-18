import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScrollBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.25 15c1.24 0 2.25 1 2.25 2.25V18a3 3 0 0 1-3 3h-11v-2a1 1 0 0 0 1-1v-.75c0-1.24 1-2.25 2.25-2.25zm-8.5 2a.25.25 0 0 0-.25.25V18a3 3 0 0 1-.17 1h8.17a1 1 0 0 0 1-1v-.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" opacity={0.4} />
        <path d="M4.5 5a1 1 0 0 0-1 1v2.25c0 .14.11.25.25.25H5.5v2H3.75c-1.24 0-2.25-1-2.25-2.25V6a3 3 0 0 1 3-3z" opacity={0.4} />
        <path fill="currentColor" d="M16.5 3a3 3 0 0 1 3 3v9h-2V6a1 1 0 0 0-1-1H7.33a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3V6a1 1 0 0 0-1-1V3z" />
    </IconBase>
  ))
);

ScrollBoldDuotone.displayName = 'ScrollBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScrollBoldDuotone, ScrollBoldDuotone as ScrollBoldDuotoneIcon, ScrollBoldDuotone as SiScrollBoldDuotone };
export type { ScrollBoldDuotoneProps };
