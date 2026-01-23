import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoBoldDuotone = memo(
  forwardRef<SVGSVGElement, VideoBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-bold-duotone" {...props}>
      <path fill="currentColor" d="M21.38 6.22A1 1 0 0 1 23 7v10a1 1 0 0 1-1.62.78l-3.41-2.73q.04-.75.03-1.85v-.68l3 2.4V9.08l-3 2.4v-.68q0-1.09-.03-1.86z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 5 6.8 5zM6.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C13.64 7 13.06 7 12.2 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

VideoBoldDuotone.displayName = 'VideoBoldDuotone';

// Triple export pattern (lucide-react style)
export { VideoBoldDuotone, VideoBoldDuotone as VideoBoldDuotoneIcon, VideoBoldDuotone as SiVideoBoldDuotone };
export default VideoBoldDuotone;
export type { VideoBoldDuotoneProps };
