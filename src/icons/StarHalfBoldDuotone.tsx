import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfBoldDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1v2.65l2.02 4.67c.23.53.72.89 1.3.94l5.06.47-3.82 3.35c-.43.37-.62.96-.5 1.52l1.12 4.95-4.38-2.6-.2-.1q-.3-.1-.6-.11v2.07l5.03 2.97c1.17.7 2.63-.34 2.33-1.7l-1.29-5.67 4.4-3.84a1.57 1.57 0 0 0-.9-2.74l-5.82-.54-2.31-5.34-.06-.12C13.1 1.28 12.55 1 12 1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.97 21.78 12 18.81V1c-.58 0-1.17.32-1.44.95L8.25 7.29l-5.83.54a1.57 1.57 0 0 0-.88 2.74l4.39 3.84-1.29 5.68a1.57 1.57 0 0 0 2.33 1.69" />
    </IconBase>
  ))
);

StarHalfBoldDuotone.displayName = 'StarHalfBoldDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfBoldDuotone, StarHalfBoldDuotone as StarHalfBoldDuotoneIcon, StarHalfBoldDuotone as SiStarHalfBoldDuotone };
export default StarHalfBoldDuotone;
export type { StarHalfBoldDuotoneProps };
