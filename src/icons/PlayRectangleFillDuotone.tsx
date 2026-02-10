import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRectangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayRectangleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlayRectangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-rectangle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.1 3.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-2.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.66 4.37a1 1 0 0 0-.74.4c-.2.26-.2.75-.2 1.72V14c0 .97 0 1.46.2 1.72a1 1 0 0 0 .74.4c.34.02.74-.25 1.55-.79l3.01-2c.67-.45 1-.68 1.12-.96a1 1 0 0 0 0-.76c-.12-.28-.45-.5-1.12-.95L12 8.66c-.81-.54-1.21-.81-1.55-.79" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
    </IconBase>
  ))
);

PlayRectangleFillDuotone.displayName = 'PlayRectangleFillDuotone';

// Triple export pattern (lucide-react style)
export { PlayRectangleFillDuotone, PlayRectangleFillDuotone as PlayRectangleFillDuotoneIcon, PlayRectangleFillDuotone as SiPlayRectangleFillDuotone };
export default PlayRectangleFillDuotone;
export type { PlayRectangleFillDuotoneProps };
