import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRectangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayRectangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlayRectangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-rectangle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M15.1 3.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-2.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-6.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v2.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h6.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-2.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
    </IconBase>
  ))
);

PlayRectangleBoldDuotone.displayName = 'PlayRectangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PlayRectangleBoldDuotone, PlayRectangleBoldDuotone as PlayRectangleBoldDuotoneIcon, PlayRectangleBoldDuotone as SiPlayRectangleBoldDuotone };
export default PlayRectangleBoldDuotone;
export type { PlayRectangleBoldDuotoneProps };
