import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkRegularProps = Omit<IconBaseProps, 'children'>;

const LinkRegular = memo(
  forwardRef<SVGSVGElement, LinkRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="link" {...props}>
      <path fill="currentColor" d="M10.53 7.08a.75.75 0 0 1 .58 1.39 4.9 4.9 0 0 0-1.58 8l3 3a4.9 4.9 0 0 0 7.02-6.86.75.75 0 0 1 1.09-1.03 6.4 6.4 0 0 1-9.17 8.95l-3-3a6.4 6.4 0 0 1 2.06-10.45" />
        <path fill="currentColor" d="M3.47 3.47a6.4 6.4 0 0 1 9.06 0l3 3a6.4 6.4 0 0 1-2.07 10.45.75.75 0 0 1-.57-1.39 4.9 4.9 0 0 0 1.58-8l-3-3a4.9 4.9 0 0 0-7.02 6.86.75.75 0 0 1-1.08 1.03 6.4 6.4 0 0 1 .1-8.95" />
    </IconBase>
  ))
);

LinkRegular.displayName = 'LinkRegular';

// Triple export pattern (lucide-react style)
export { LinkRegular, LinkRegular as LinkRegularIcon, LinkRegular as SiLinkRegular };
export type { LinkRegularProps };
