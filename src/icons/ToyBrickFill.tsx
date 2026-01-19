import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToyBrickFillProps = Omit<IconBaseProps, 'children'>;

const ToyBrickFill = memo(
  forwardRef<SVGSVGElement, ToyBrickFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="toy-brick-fill" {...props}>
      <path fill="currentColor" d="M9.5 4.75c.97 0 1.75.78 1.75 1.75V8h1.5V6.5c0-.97.78-1.75 1.75-1.75h3c.97 0 1.75.78 1.75 1.75v1.77A3 3 0 0 1 21 11v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 1.75-2.73V6.5c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ToyBrickFill.displayName = 'ToyBrickFill';

// Triple export pattern (lucide-react style)
export { ToyBrickFill, ToyBrickFill as ToyBrickFillIcon, ToyBrickFill as SiToyBrickFill };
export default ToyBrickFill;
export type { ToyBrickFillProps };
