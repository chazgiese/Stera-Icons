import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfRegularDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-duotone" {...props}>
      <path d="m12 4.1 1.96 4.5c.18.43.58.71 1.04.75l4.9.45-3.7 3.22c-.34.3-.5.77-.4 1.22L16.9 19l-4.25-2.5-.15-.07q-.24-.1-.49-.1v1.54l4.6 2.7c.94.55 2.12-.26 1.88-1.36l-1.18-5.16 4.02-3.5c.84-.73.38-2.09-.72-2.19l-5.33-.49-2.11-4.86-.05-.1A1.3 1.3 0 0 0 12 2.26z" opacity={.4} />
        <path d="m12 17.87-4.6 2.7c-.94.55-2.12-.26-1.88-1.36l1.18-5.16-4.02-3.5c-.84-.73-.38-2.09.72-2.19l5.33-.49 2.11-4.86.05-.1c.23-.44.67-.66 1.11-.66z" />
    </IconBase>
  ))
);

StarHalfRegularDuotone.displayName = 'StarHalfRegularDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfRegularDuotone, StarHalfRegularDuotone as StarHalfRegularDuotoneIcon, StarHalfRegularDuotone as SiStarHalfRegularDuotone };
export default StarHalfRegularDuotone;
export type { StarHalfRegularDuotoneProps };
