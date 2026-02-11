import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvBoldProps = Omit<IconBaseProps, 'children'>;

const TvBold = memo(
  forwardRef<SVGSVGElement, TvBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-bold" {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-2.25 1.95l.64 1.91a1 1 0 1 1-1.9.64L17.28 18H6.72l-.77 2.32a1 1 0 1 1-1.9-.64l.64-1.91a4 4 0 0 1-2.25-1.95 4 4 0 0 1-.4-1.57Q2 13.43 2 12.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 9.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

TvBold.displayName = 'TvBold';

// Triple export pattern (lucide-react style)
export { TvBold, TvBold as TvBoldIcon, TvBold as SiTvBold };
export default TvBold;
export type { TvBoldProps };
