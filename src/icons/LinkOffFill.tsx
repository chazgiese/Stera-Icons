import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffFillProps = Omit<IconBaseProps, 'children'>;

const LinkOffFill = memo(
  forwardRef<SVGSVGElement, LinkOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-off-fill" {...props}>
      <path d="M4.95 10.86a1.5 1.5 0 1 1 2.12 2.12l-.75.76a2.8 2.8 0 0 0 3.94 3.94l.76-.75a1.5 1.5 0 0 1 2.12 2.12l-.75.75a5.8 5.8 0 0 1-8.2-8.19zM3.83 3.83a1.5 1.5 0 0 1 2.12 0l14.22 14.22a1.5 1.5 0 0 1-2.12 2.12L3.83 5.95a1.5 1.5 0 0 1 0-2.12M11.61 4.2a5.8 5.8 0 0 1 8.2 8.19l-.76.75a1.5 1.5 0 1 1-2.12-2.12l.75-.76a2.8 2.8 0 0 0-3.94-3.94l-.76.75a1.5 1.5 0 0 1-2.12-2.12z" />
    </IconBase>
  ))
);

LinkOffFill.displayName = 'LinkOffFill';

// Triple export pattern (lucide-react style)
export { LinkOffFill, LinkOffFill as LinkOffFillIcon, LinkOffFill as SiLinkOffFill };
export default LinkOffFill;
export type { LinkOffFillProps };
