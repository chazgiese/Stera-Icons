import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkBoldProps = Omit<IconBaseProps, 'children'>;

const LinkBold = memo(
  forwardRef<SVGSVGElement, LinkBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-bold" {...props}>
      <path fill="currentColor" d="M10.44 6.85a1 1 0 0 1 .77 1.85 4.64 4.64 0 0 0-1.5 7.6l3 3a4.66 4.66 0 0 0 6.66-6.51 1 1 0 0 1 1.45-1.38 6.66 6.66 0 0 1-9.53 9.3l-3-3a6.66 6.66 0 0 1 2.15-10.86" />
        <path fill="currentColor" d="M3.3 3.3a6.66 6.66 0 0 1 9.4 0l3 3a6.66 6.66 0 0 1-2.14 10.85 1 1 0 0 1-.77-1.85 4.64 4.64 0 0 0 1.5-7.6l-3-3a4.66 4.66 0 0 0-6.66 6.52A1 1 0 0 1 3.2 12.6a6.66 6.66 0 0 1 .1-9.3" />
    </IconBase>
  ))
);

LinkBold.displayName = 'LinkBold';

// Triple export pattern (lucide-react style)
export { LinkBold, LinkBold as LinkBoldIcon, LinkBold as SiLinkBold };
export default LinkBold;
export type { LinkBoldProps };
