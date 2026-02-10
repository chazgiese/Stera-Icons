import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarBoldProps = Omit<IconBaseProps, 'children'>;

const AwardStarBold = memo(
  forwardRef<SVGSVGElement, AwardStarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.85 2.69a1.3 1.3 0 0 1 2.34.1l1.1 2.55 2.8.26a1.3 1.3 0 0 1 .73 2.27l-2.1 1.83.62 2.72a1.3 1.3 0 0 1-1.93 1.4L13 12.99V16h.2a4 4 0 0 1 3.8 4h.5a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2H7a4 4 0 0 1 3.8-4h.2v-3.01l-1.4.83a1.3 1.3 0 0 1-1.93-1.4l.6-2.72-2.09-1.83a1.3 1.3 0 0 1 .74-2.27l2.78-.26 1.1-2.56zM11 18a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm.37-11.48c-.19.43-.6.73-1.07.77l-1.57.15L9.9 8.47c.36.32.52.8.41 1.27l-.34 1.53 1.36-.8.16-.09a1.3 1.3 0 0 1 1 0l.16.08 1.36.8-.34-1.52c-.1-.47.05-.95.4-1.27l1.2-1.03-1.58-.15a1.3 1.3 0 0 1-1.07-.77L12 5.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBold.displayName = 'AwardStarBold';

// Triple export pattern (lucide-react style)
export { AwardStarBold, AwardStarBold as AwardStarBoldIcon, AwardStarBold as SiAwardStarBold };
export default AwardStarBold;
export type { AwardStarBoldProps };
