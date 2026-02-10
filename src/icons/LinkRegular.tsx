import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkRegularProps = Omit<IconBaseProps, 'children'>;

const LinkRegular = memo(
  forwardRef<SVGSVGElement, LinkRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="link" {...props}>
      <path fill="currentColor" d="M10.52 7.14A1 1 0 0 1 11.29 9a4.26 4.26 0 0 0-1.38 6.96l2.8 2.8a4.27 4.27 0 0 0 6.11-5.97 1 1 0 0 1 1.45-1.38 6.27 6.27 0 0 1-8.98 8.76l-2.8-2.8a6.27 6.27 0 0 1 2.03-10.22" />
        <path fill="currentColor" d="M3.84 3.84a6.27 6.27 0 0 1 8.87 0l2.8 2.8a6.27 6.27 0 0 1-2.03 10.22 1 1 0 0 1-.77-1.85q.76-.3 1.38-.92a4.27 4.27 0 0 0 0-6.04l-2.8-2.8a4.27 4.27 0 0 0-6.1 5.97 1 1 0 0 1-1.45 1.38 6.27 6.27 0 0 1 .1-8.76" />
    </IconBase>
  ))
);

LinkRegular.displayName = 'LinkRegular';

// Triple export pattern (lucide-react style)
export { LinkRegular, LinkRegular as LinkRegularIcon, LinkRegular as SiLinkRegular };
export default LinkRegular;
export type { LinkRegularProps };
