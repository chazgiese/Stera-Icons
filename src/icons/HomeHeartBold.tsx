import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeHeartBoldProps = Omit<IconBaseProps, 'children'>;

const HomeHeartBold = memo(
  forwardRef<SVGSVGElement, HomeHeartBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-heart-bold" {...props}>
      <path fillRule="evenodd" d="M13.9 8.5c1.7 0 3.1 1.37 3.1 3.08 0 1.24-.67 2.17-.88 2.46-1.05 1.47-2.54 2.48-3.5 3.24a1 1 0 0 1-1.24 0c-.96-.76-2.45-1.77-3.5-3.24A4.3 4.3 0 0 1 7 11.58a3.09 3.09 0 0 1 5-2.43 3 3 0 0 1 1.9-.65m0 2c-.44 0-.82.26-1 .63a1 1 0 0 1-1.8 0 1.1 1.1 0 0 0-1-.63c-.62 0-1.1.49-1.1 1.08 0 .55.31 1.03.5 1.3.69.95 1.59 1.65 2.5 2.35.91-.7 1.81-1.4 2.5-2.36.19-.26.5-.74.5-1.3 0-.58-.48-1.07-1.1-1.07" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.95 1.94a4 4 0 0 1 2.1 0c.82.23 1.53.8 2.52 1.58l3.54 2.76c.7.54 1.2.92 1.56 1.41q.46.64.67 1.38c.17.6.16 1.22.16 2.1v3.63q.01 1.33-.05 2.22c-.05.6-.15 1.15-.41 1.66-.41.8-1.06 1.45-1.86 1.86-.51.26-1.06.36-1.66.41q-.9.06-2.22.05H8.7q-1.34.01-2.22-.05a4 4 0 0 1-1.66-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.66q-.06-.9-.05-2.22v-3.63c0-.88 0-1.5.16-2.1q.2-.75.67-1.38c.37-.49.87-.87 1.56-1.4L8.43 3.5c.98-.76 1.7-1.34 2.52-1.57m1.57 1.93a2 2 0 0 0-1.04 0c-.34.1-.69.34-1.82 1.22L6.12 7.86c-.78.6-1.02.8-1.18 1.02q-.24.34-.36.73c-.07.27-.08.57-.08 1.56v3.63c0 .93 0 1.56.04 2.05s.11.74.2.92q.34.65.99.98c.18.1.44.17.92.2.49.05 1.12.05 2.05.05h6.6c.93 0 1.56 0 2.05-.04s.74-.11.92-.2q.65-.34.98-.99c.1-.18.17-.44.2-.92.05-.49.05-1.12.05-2.05v-3.63c0-.99 0-1.3-.08-1.56q-.12-.39-.36-.73c-.16-.22-.4-.41-1.18-1.02l-3.54-2.77c-1.13-.88-1.48-1.12-1.82-1.22" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartBold.displayName = 'HomeHeartBold';

// Triple export pattern (lucide-react style)
export { HomeHeartBold, HomeHeartBold as HomeHeartBoldIcon, HomeHeartBold as SiHomeHeartBold };
export default HomeHeartBold;
export type { HomeHeartBoldProps };
