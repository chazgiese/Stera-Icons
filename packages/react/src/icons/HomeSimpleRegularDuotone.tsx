import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, HomeSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.38 4.02a2.25 2.25 0 0 0-2.76 0l-6 4.67a2.3 2.3 0 0 0-.87 1.78V18c0 1.24 1 2.25 2.25 2.25h2a.75.75 0 0 0 0 1.5H6A3.75 3.75 0 0 1 2.25 18v-7.53c0-1.16.53-2.25 1.45-2.96l6-4.67a3.75 3.75 0 0 1 4.6 0l6 4.67c.92.7 1.45 1.8 1.45 2.96V18A3.75 3.75 0 0 1 18 21.75h-2a.75.75 0 0 0 0-1.5h2c1.24 0 2.25-1 2.25-2.25v-7.53c0-.7-.32-1.35-.87-1.78z" opacity={.4} />
        <path fill="currentColor" d="M16 20.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

HomeSimpleRegularDuotone.displayName = 'HomeSimpleRegularDuotone';

export { HomeSimpleRegularDuotone };
export type { HomeSimpleRegularDuotoneProps };
