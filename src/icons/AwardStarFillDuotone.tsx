import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarFillDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.5 20a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2zM11.12 2.73c.4-.64 1.36-.64 1.77 0l.07.15 1.17 2.7 2.93.27c.91.08 1.3 1.22.6 1.83L15.44 9.6l.65 2.86c.2.9-.77 1.6-1.56 1.13L12 12.1l-2.53 1.5a1.05 1.05 0 0 1-1.56-1.13l.65-2.86-2.21-1.93c-.7-.61-.32-1.75.59-1.83l2.93-.27 1.17-2.7z" />
        <path fill="currentColor" d="M13 12.7V16a4 4 0 0 1 4 4H7a4 4 0 0 1 4-4v-3.3l1-.6z" opacity={.4} />
    </IconBase>
  ))
);

AwardStarFillDuotone.displayName = 'AwardStarFillDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarFillDuotone, AwardStarFillDuotone as AwardStarFillDuotoneIcon, AwardStarFillDuotone as SiAwardStarFillDuotone };
export default AwardStarFillDuotone;
export type { AwardStarFillDuotoneProps };
