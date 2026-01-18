import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AwardStarFillProps = Omit<IconBaseProps, 'children'>;

const AwardStarFill = memo(
  forwardRef<SVGSVGElement, AwardStarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.06 1.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L13 13.33v3.91A3.75 3.75 0 0 1 16.75 21h.75a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2h.75A3.75 3.75 0 0 1 11 17.25v-3.9l-2.12 1.24a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 7.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31z" />
    </IconBase>
  ))
);

AwardStarFill.displayName = 'AwardStarFill';

// Triple export pattern (lucide-react style)
export { AwardStarFill, AwardStarFill as AwardStarFillIcon, AwardStarFill as SiAwardStarFill };
export type { AwardStarFillProps };
