import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToyBrickFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToyBrickFillDuotone = memo(
  forwardRef<SVGSVGElement, ToyBrickFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toy-brick-fill-duotone" {...props}>
      <path fill="currentColor" d="M18 8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" d="M9.5 4.75c.97 0 1.75.78 1.75 1.75V8H6q-.68 0-1.25.27V6.5c0-.97.78-1.75 1.75-1.75zM17.5 4.75c.97 0 1.75.78 1.75 1.75v1.77Q18.68 8.01 18 8h-5.25V6.5c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ToyBrickFillDuotone.displayName = 'ToyBrickFillDuotone';

// Triple export pattern (lucide-react style)
export { ToyBrickFillDuotone, ToyBrickFillDuotone as ToyBrickFillDuotoneIcon, ToyBrickFillDuotone as SiToyBrickFillDuotone };
export type { ToyBrickFillDuotoneProps };
