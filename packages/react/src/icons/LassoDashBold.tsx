import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LassoDashBoldProps = Omit<IconBaseProps, 'children'>;

const LassoDashBold = memo(
  forwardRef<SVGSVGElement, LassoDashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.77 19.9a1 1 0 1 1 .33 1.97 13 13 0 0 1-2.07.17 1 1 0 0 1 0-2 9 9 0 0 0 1.74-.15M5.65 19.07a1 1 0 0 1 1.4-.24q.67.48 1.47.78a1 1 0 1 1-.69 1.88 8 8 0 0 1-1.94-1.03 1 1 0 0 1-.24-1.4M16.7 18.34A1 1 0 1 1 17.83 20q-.84.57-1.8 1a1 1 0 0 1-.81-1.83 9 9 0 0 0 1.48-.82M3.3 14.87a1 1 0 0 1 1.27.6q.3.83.76 1.54a1 1 0 0 1-1.69 1.07 10 10 0 0 1-.95-1.93 1 1 0 0 1 .6-1.28M19.39 15.23a1 1 0 0 1 1.81.84q-.45.96-1.1 1.8a1 1 0 0 1-1.58-1.24q.52-.66.87-1.4M3.2 10.1a1 1 0 0 1 .86 1.12Q4 11.62 4 12l.03.9a1 1 0 0 1-1.99.15Q2 12.53 2 12q0-.52.08-1.06a1 1 0 0 1 1.13-.85M20.65 10.01a1 1 0 0 1 1.19.76 7 7 0 0 1 .15 2.24 1 1 0 0 1-2-.14 7 7 0 0 0-.1-1.66 1 1 0 0 1 .76-1.2M9.37 7.6a1 1 0 0 1 1 1.73q-.4.23-.82.5a1 1 0 0 1-1.1-1.66q.45-.3.92-.58M4.15 6.31a1 1 0 1 1 1.56 1.26q-.54.66-.9 1.37A1 1 0 0 1 3.04 8q.45-.87 1.11-1.7M16.74 6.94a1 1 0 0 1 1.29-.57q1.16.45 2.05 1.26A1 1 0 0 1 18.7 9.1a4 4 0 0 0-1.4-.86 1 1 0 0 1-.57-1.29M14.6 5.9a1 1 0 0 1 .14 1.99q-.86.06-1.8.32a1 1 0 1 1-.55-1.92q1.14-.32 2.2-.4M8.06 3.2A1 1 0 1 1 8.95 5q-.78.4-1.44.86a1 1 0 1 1-1.17-1.62q.8-.58 1.72-1.03M11.84 2.01A1 1 0 0 1 12.16 4q-.42.06-.83.16a1 1 0 0 1-.46-1.94q.47-.12.97-.2" />
    </IconBase>
  ))
);

LassoDashBold.displayName = 'LassoDashBold';

// Triple export pattern (lucide-react style)
export { LassoDashBold, LassoDashBold as LassoDashBoldIcon, LassoDashBold as SiLassoDashBold };
export type { LassoDashBoldProps };
