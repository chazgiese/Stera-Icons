import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.57 7.38a1.5 1.5 0 0 1 1.86 2.35q-.2.15-.37.33a4.16 4.16 0 0 0 0 5.88l3 3a4.16 4.16 0 0 0 6.8-4.47 1.5 1.5 0 1 1 2.8-1.1 7.16 7.16 0 0 1-11.72 7.69l-3-3a7.16 7.16 0 0 1 .63-10.68" opacity={.4} />
        <path fill="currentColor" d="M2.94 2.94a7.16 7.16 0 0 1 10.12 0l3 3a7.16 7.16 0 0 1-.63 10.68 1.5 1.5 0 0 1-1.86-2.35q.2-.15.37-.33a4.16 4.16 0 0 0 0-5.88l-3-3a4.16 4.16 0 0 0-6.8 4.5 1.5 1.5 0 0 1-2.78 1.1 7.2 7.2 0 0 1 1.58-7.72" />
    </IconBase>
  ))
);

LinkFillDuotone.displayName = 'LinkFillDuotone';

export { LinkFillDuotone };
export type { LinkFillDuotoneProps };
