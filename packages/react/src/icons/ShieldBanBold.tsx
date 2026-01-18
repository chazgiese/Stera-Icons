import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldBanBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldBanBold = memo(
  forwardRef<SVGSVGElement, ShieldBanBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5l.01-.13v-.04l.09-.25v-.02l.14-.2.01-.01.1-.1.05-.04.24-.13 8-3zM5 10.58a11 11 0 0 0 6.08 9.84l.92.46.92-.46a11 11 0 0 0 3.83-3.17L5 7.17zm.93-5.24 11.9 10.2c.75-1.52 1.17-3.2 1.17-4.96V5.7l-7-2.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanBold.displayName = 'ShieldBanBold';

export { ShieldBanBold };
export type { ShieldBanBoldProps };
