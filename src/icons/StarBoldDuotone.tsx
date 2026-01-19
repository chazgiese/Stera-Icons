import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarBoldDuotone = memo(
  forwardRef<SVGSVGElement, StarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-bold-duotone" {...props}>
      <path fill="currentColor" d="M8.69 9.26a1.6 1.6 0 0 0 1.3-.94L12 3.66V1c-.57 0-1.17.32-1.44.95L8.25 7.29l-5.83.54a1.57 1.57 0 0 0-.88 2.74l4.39 3.84-1.29 5.68a1.57 1.57 0 0 0 2.33 1.69L12 18.81v-2.07q-.3 0-.6.12l-.2.1-4.39 2.59 1.12-4.95a1.6 1.6 0 0 0-.5-1.52L3.63 9.73z" />
        <path fill="currentColor" d="M15.31 9.26a1.6 1.6 0 0 1-1.3-.94L12 3.66V1c.57 0 1.17.32 1.44.95l2.31 5.34 5.83.54a1.57 1.57 0 0 1 .88 2.74l-4.39 3.84 1.29 5.68a1.57 1.57 0 0 1-2.33 1.69L12 18.81v-2.07q.3 0 .6.12l.2.1 4.39 2.59-1.12-4.95c-.13-.56.06-1.15.5-1.52l3.81-3.35z" opacity={.4} />
    </IconBase>
  ))
);

StarBoldDuotone.displayName = 'StarBoldDuotone';

// Triple export pattern (lucide-react style)
export { StarBoldDuotone, StarBoldDuotone as StarBoldDuotoneIcon, StarBoldDuotone as SiStarBoldDuotone };
export type { StarBoldDuotoneProps };
