import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltFillDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-play-alt-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.6 5q1.65-.01 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v1.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 15.25 2 13.6v-1.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 4.98 9.4 5zm-4.2 4.73a1 1 0 0 0-.71.4c-.19.27-.19.72-.19 1.63v2.48c0 .9 0 1.36.19 1.62a1 1 0 0 0 .7.41c.32.04.72-.19 1.5-.64l2.18-1.24c.8-.46 1.2-.68 1.33-.98a1 1 0 0 0 0-.82c-.14-.3-.54-.52-1.33-.98l-2.18-1.24c-.78-.45-1.18-.68-1.5-.64" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.4 9.73c.31-.04.7.19 1.5.64l2.17 1.24c.8.46 1.2.68 1.33.98a1 1 0 0 1 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64a1 1 0 0 1-.7-.4c-.19-.27-.19-.72-.19-1.63v-2.48c0-.9 0-1.36.2-1.62a1 1 0 0 1 .7-.41M9.05 1.6a1 1 0 0 1 1.34.45L11.86 5H9.63L8.61 2.95a1 1 0 0 1 .44-1.34M13.1 3.05a1 1 0 0 1 1.8.9L14.36 5h-2.24z" />
    </IconBase>
  ))
);

TvPlayAltFillDuotone.displayName = 'TvPlayAltFillDuotone';

// Triple export pattern (lucide-react style)
export { TvPlayAltFillDuotone, TvPlayAltFillDuotone as TvPlayAltFillDuotoneIcon, TvPlayAltFillDuotone as SiTvPlayAltFillDuotone };
export default TvPlayAltFillDuotone;
export type { TvPlayAltFillDuotoneProps };
