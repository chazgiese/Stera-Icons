import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type VideoOffFillProps = Omit<IconBaseProps, 'children'>;

const VideoOffFill = memo(
  forwardRef<SVGSVGElement, VideoOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.2 18.46q-.78.05-2 .04H6.8q-1.24.01-2.01-.04a4 4 0 0 1-1.38-.34 3.5 3.5 0 0 1-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01.03-.36.1-.67zM21.38 6.22A1 1 0 0 1 23 7v10a1 1 0 0 1-1.62.78l-2.71-2.16.03-.3q.06-.9.05-2.12v-2.4q.01-1.22-.05-2.11l-.03-.3zM12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01-.03.36-.1.67L4.8 5.54a27 27 0 0 1 2-.04zM.23 4.36a1 1 0 0 1 1.4-.13l17 14a1 1 0 0 1-1.27 1.54l-17-14a1 1 0 0 1-.13-1.4" />
    </IconBase>
  ))
);

VideoOffFill.displayName = 'VideoOffFill';

export { VideoOffFill };
export type { VideoOffFillProps };
