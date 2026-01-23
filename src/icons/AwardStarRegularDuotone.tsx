import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarRegularDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star-duotone" {...props}>
      <path fill="currentColor" d="M11 18.75c-1.24 0-2.25 1-2.25 2.25v.25h-1.5V21A3.75 3.75 0 0 1 11 17.25h.25v-4.06l.75-.44.75.44v4.06H13A3.75 3.75 0 0 1 16.75 21v.25h-1.5V21c0-1.24-1-2.25-2.25-2.25z" opacity={.4} />
        <path fill="currentColor" d="M17.5 21.25a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M11.06 1.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L12 12.74 8.88 14.6a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 7.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31zm-.23 4.28a1.1 1.1 0 0 1-.91.66l-2.93.27 2.2 1.94c.31.26.45.68.36 1.07l-.65 2.86 2.54-1.5.13-.06c.27-.12.59-.12.86 0l.14.06 2.53 1.5-.65-2.86c-.09-.4.05-.8.35-1.07l2.21-1.94-2.93-.27c-.4-.03-.75-.29-.91-.66L12 3.34z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarRegularDuotone.displayName = 'AwardStarRegularDuotone';

// Triple export pattern (lucide-react style)
export { AwardStarRegularDuotone, AwardStarRegularDuotone as AwardStarRegularDuotoneIcon, AwardStarRegularDuotone as SiAwardStarRegularDuotone };
export default AwardStarRegularDuotone;
export type { AwardStarRegularDuotoneProps };
