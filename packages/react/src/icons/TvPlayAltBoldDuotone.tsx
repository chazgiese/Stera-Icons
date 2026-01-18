import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TvPlayAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.6 5q1.65-.01 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v1.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 15.25 2 13.6v-1.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 4.98 9.4 5zM9.4 7c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 10.47 4 11.26 4 12.4v1.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h5.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 7 15.74 7 14.6 7z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.4 2.05a1 1 0 1 0-1.8.9L9.64 5h2.23zM12.12 5h2.24l.52-1.05a1 1 0 0 0-1.78-.9z" clipRule="evenodd" />
        <path fill="currentColor" d="M10.4 9.73c.31-.04.7.19 1.5.64l2.17 1.24c.8.46 1.2.68 1.33.98a1 1 0 0 1 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64a1 1 0 0 1-.7-.4c-.19-.27-.19-.72-.19-1.63v-2.48c0-.9 0-1.36.2-1.62a1 1 0 0 1 .7-.41" />
    </IconBase>
  ))
);

TvPlayAltBoldDuotone.displayName = 'TvPlayAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { TvPlayAltBoldDuotone, TvPlayAltBoldDuotone as TvPlayAltBoldDuotoneIcon, TvPlayAltBoldDuotone as SiTvPlayAltBoldDuotone };
export type { TvPlayAltBoldDuotoneProps };
