import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TvBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvBoldDuotone = memo(
  forwardRef<SVGSVGElement, TvBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 8.8v4.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M4.75 18.96q.79.05 1.97.04l-.77 2.32a1 1 0 0 1-1.9-.64l.58-1.74zM19.95 20.68a1 1 0 0 1-1.9.64L17.28 19q1.18.01 1.97-.04l.12-.02z" />
    </IconBase>
  ))
);

TvBoldDuotone.displayName = 'TvBoldDuotone';

// Triple export pattern (lucide-react style)
export { TvBoldDuotone, TvBoldDuotone as TvBoldDuotoneIcon, TvBoldDuotone as SiTvBoldDuotone };
export default TvBoldDuotone;
export type { TvBoldDuotoneProps };
