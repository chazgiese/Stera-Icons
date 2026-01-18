import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeFillProps = Omit<IconBaseProps, 'children'>;

const GlobeFill = memo(
  forwardRef<SVGSVGElement, GlobeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.02 13c.15 0 .26.12.25.27a16 16 0 0 1-2.8 7.84l-1.23 1.78a.3.3 0 0 1-.2.1L12 23h-.04a.3.3 0 0 1-.2-.11l-1.24-1.78a16 16 0 0 1-2.8-7.84.25.25 0 0 1 .26-.27zM5.47 13c.13 0 .24.1.25.24a18 18 0 0 0 3.16 9c.09.13-.03.3-.18.25a11 11 0 0 1-7.63-9.22.25.25 0 0 1 .25-.27zM22.68 13c.15 0 .26.13.25.27a11 11 0 0 1-7.63 9.22c-.15.05-.27-.12-.18-.24a18 18 0 0 0 3.16-9.01c0-.14.12-.24.25-.24zM8.7 1.5c.15-.04.27.13.18.25a18 18 0 0 0-3.16 9.01c0 .14-.12.24-.25.24H1.32a.25.25 0 0 1-.25-.27A11 11 0 0 1 8.7 1.5M12.04 1q.13 0 .2.1l1.24 1.8a16 16 0 0 1 2.8 7.83c0 .15-.11.27-.26.27H7.98a.25.25 0 0 1-.25-.27 16 16 0 0 1 2.8-7.84l1.23-1.78q.07-.1.2-.1L12 1zM15.3 1.5a11 11 0 0 1 7.63 9.23c.01.14-.1.27-.25.27h-4.15a.25.25 0 0 1-.25-.24 18 18 0 0 0-3.16-9c-.09-.13.03-.3.18-.25" />
    </IconBase>
  ))
);

GlobeFill.displayName = 'GlobeFill';

export { GlobeFill };
export type { GlobeFillProps };
