import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarBoldDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 13.63V17a4 4 0 0 1 4 4H7a4 4 0 0 1 4-4v-3.37l1-.59zM11 19a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.5 21a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M10.75 1.82a1.36 1.36 0 0 1 2.5 0L14.62 5l3.46.32a1.36 1.36 0 0 1 .77 2.37l-2.6 2.28.76 3.37c.26 1.17-1 2.07-2.02 1.47L12 13.04l-2.99 1.77c-1.02.6-2.28-.3-2.02-1.47l.77-3.37L5.15 7.7c-.9-.8-.41-2.26.77-2.37L9.38 5zm.31 4.32c-.2.46-.63.77-1.12.81l-2.35.22 1.77 1.55c.38.33.54.83.43 1.32l-.52 2.3 2.04-1.21.16-.08c.34-.15.72-.15 1.06 0l.16.08 2.04 1.2-.52-2.3c-.11-.48.05-.98.43-1.31l1.77-1.55-2.35-.22c-.5-.04-.93-.35-1.12-.81L12 3.97z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBoldDuotone.displayName = 'AwardStarBoldDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarBoldDuotone, AwardStarBoldDuotone as AwardStarBoldDuotoneIcon, AwardStarBoldDuotone as SiAwardStarBoldDuotone };
export default AwardStarBoldDuotone;
export type { AwardStarBoldDuotoneProps };
