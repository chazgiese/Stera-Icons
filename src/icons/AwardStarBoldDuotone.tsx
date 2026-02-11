import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarBoldDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-bold-duotone" {...props}>
      <path d="M11 18a2 2 0 0 0-2 2H7a4 4 0 0 1 4-4v-3.01l1-.6 1 .6V16a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2z" opacity={.4} />
        <path d="M17.5 20a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M10.85 2.69a1.3 1.3 0 0 1 2.34.1l1.1 2.55 2.8.26a1.3 1.3 0 0 1 .73 2.27l-2.1 1.83.62 2.72a1.3 1.3 0 0 1-1.93 1.4L12 12.4l-2.4 1.42a1.3 1.3 0 0 1-1.93-1.4l.6-2.72-2.09-1.83a1.3 1.3 0 0 1 .74-2.27l2.78-.26 1.1-2.56zm.52 3.83c-.19.43-.6.73-1.07.77l-1.57.15L9.9 8.47c.36.32.52.8.41 1.27l-.34 1.53 1.36-.8.16-.09a1.3 1.3 0 0 1 1 0l.16.08 1.36.8-.34-1.52c-.1-.47.05-.95.4-1.27l1.2-1.03-1.58-.15a1.3 1.3 0 0 1-1.07-.77L12 5.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBoldDuotone.displayName = 'AwardStarBoldDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarBoldDuotone, AwardStarBoldDuotone as AwardStarBoldDuotoneIcon, AwardStarBoldDuotone as SiAwardStarBoldDuotone };
export default AwardStarBoldDuotone;
export type { AwardStarBoldDuotoneProps };
