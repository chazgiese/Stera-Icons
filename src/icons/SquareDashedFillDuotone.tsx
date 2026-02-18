import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed-fill-duotone" {...props}>
      <path d="M15.67 6.5c1 0 1.83.82 1.83 1.83v7.34c0 1-.82 1.83-1.83 1.83H8.33a1.83 1.83 0 0 1-1.83-1.83V8.33c0-1 .82-1.83 1.83-1.83z" opacity={.4} />
        <path d="M3.5 16.44c.48 0 .88.39.88.87v.19c0 1.17.95 2.13 2.12 2.13h.19a.88.88 0 0 1 0 1.75H6.5a3.9 3.9 0 0 1-3.87-3.88v-.19c0-.48.39-.87.87-.87M13.75 19.63a.88.88 0 0 1 0 1.75h-3.5a.88.88 0 0 1 0-1.75zM20.5 16.44c.48 0 .88.39.88.87v.19a3.9 3.9 0 0 1-3.88 3.88h-.19a.88.88 0 0 1 0-1.75h.19c1.17 0 2.13-.96 2.13-2.13v-.19c0-.48.39-.87.87-.87M3.5 9.38c.48 0 .88.39.88.87v3.5a.88.88 0 0 1-1.75 0v-3.5c0-.48.39-.87.87-.87M20.5 9.38c.48 0 .88.39.88.87v3.5a.88.88 0 0 1-1.75 0v-3.5c0-.48.39-.87.87-.87M6.69 2.63a.87.87 0 1 1 0 1.75H6.5c-1.17 0-2.12.95-2.12 2.12v.19a.87.87 0 1 1-1.75 0V6.5A3.9 3.9 0 0 1 6.5 2.63zM17.5 2.63a3.9 3.9 0 0 1 3.88 3.87v.19a.88.88 0 0 1-1.75 0V6.5c0-1.17-.96-2.12-2.13-2.12h-.19a.88.88 0 0 1 0-1.75zM13.75 2.63a.88.88 0 0 1 0 1.75h-3.5a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

SquareDashedFillDuotone.displayName = 'SquareDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { SquareDashedFillDuotone, SquareDashedFillDuotone as SquareDashedFillDuotoneIcon, SquareDashedFillDuotone as SiSquareDashedFillDuotone };
export default SquareDashedFillDuotone;
export type { SquareDashedFillDuotoneProps };
