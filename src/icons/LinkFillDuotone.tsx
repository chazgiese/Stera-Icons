import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-fill-duotone" {...props}>
      <path d="M9.16 7.3a1.5 1.5 0 0 1 1.68 2.5q-.3.2-.58.47a3.77 3.77 0 0 0 0 5.33l2.8 2.8a3.77 3.77 0 0 0 5.73-4.88 1.5 1.5 0 0 1 2.42-1.76 6.77 6.77 0 0 1-10.27 8.76l-2.8-2.8A6.77 6.77 0 0 1 9.16 7.3" opacity={.4} />
        <path d="M3.48 3.48a6.77 6.77 0 0 1 9.58 0l2.8 2.8a6.77 6.77 0 0 1-1.02 10.42 1.5 1.5 0 0 1-1.67-2.5q.3-.2.57-.46a3.77 3.77 0 0 0 0-5.34l-2.8-2.8a3.77 3.77 0 0 0-5.73 4.88 1.5 1.5 0 0 1-2.42 1.77 6.8 6.8 0 0 1 .7-8.77" />
    </IconBase>
  ))
);

LinkFillDuotone.displayName = 'LinkFillDuotone';

// Triple export pattern (lucide-react style)
export { LinkFillDuotone, LinkFillDuotone as LinkFillDuotoneIcon, LinkFillDuotone as SiLinkFillDuotone };
export default LinkFillDuotone;
export type { LinkFillDuotoneProps };
