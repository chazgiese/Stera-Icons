import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkFillProps = Omit<IconBaseProps, 'children'>;

const LinkFill = memo(
  forwardRef<SVGSVGElement, LinkFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-fill" {...props}>
      <path d="M9.16 7.3a1.5 1.5 0 0 1 1.68 2.5q-.3.2-.58.47a3.77 3.77 0 0 0 0 5.33l2.8 2.8a3.77 3.77 0 0 0 5.73-4.88 1.5 1.5 0 1 1 2.42-1.76 6.78 6.78 0 0 1-10.27 8.76l-2.8-2.8A6.77 6.77 0 0 1 9.16 7.3" />
        <path d="M3.48 3.48a6.77 6.77 0 0 1 9.58 0l2.8 2.8a6.77 6.77 0 0 1-1.02 10.42 1.5 1.5 0 0 1-1.67-2.5q.3-.2.57-.46a3.77 3.77 0 0 0 0-5.34l-2.8-2.8a3.77 3.77 0 0 0-5.73 4.88 1.5 1.5 0 0 1-2.42 1.77 6.8 6.8 0 0 1 .7-8.77" />
    </IconBase>
  ))
);

LinkFill.displayName = 'LinkFill';

// Triple export pattern (lucide-react style)
export { LinkFill, LinkFill as LinkFillIcon, LinkFill as SiLinkFill };
export default LinkFill;
export type { LinkFillProps };
