import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayBoldProps = Omit<IconBaseProps, 'children'>;

const PlayBold = memo(
  forwardRef<SVGSVGElement, PlayBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-bold" {...props}>
      <path fillRule="evenodd" d="M6.14 1.91c.67-.07 1.32.15 1.96.44q.96.46 2.4 1.3L17.5 7.7c.97.56 1.75 1 2.33 1.41.57.4 1.08.86 1.36 1.48.4.9.4 1.94 0 2.84a4 4 0 0 1-1.36 1.47q-.87.6-2.33 1.42l-7.01 4.03q-1.44.85-2.4 1.3c-.64.3-1.29.52-1.96.45a3.5 3.5 0 0 1-2.47-1.42 4 4 0 0 1-.6-1.92Q2.97 17.7 3 16.04V7.96q-.02-1.65.06-2.71c.07-.7.2-1.37.61-1.92A3.5 3.5 0 0 1 6.14 1.9m.2 2c-.42.04-.8.26-1.05.6-.08.1-.18.32-.23.92C5 6.02 5 6.8 5 7.96v8.08c0 1.15 0 1.94.06 2.53.05.6.15.82.23.92.24.34.63.56 1.05.6.13.02.38 0 .93-.26.54-.25 1.23-.64 2.23-1.22l7.01-4.04c1-.57 1.69-.97 2.17-1.31.5-.35.64-.54.7-.66.16-.38.16-.82 0-1.2-.06-.12-.2-.31-.7-.66-.48-.34-1.17-.74-2.17-1.31l-7-4.04c-1-.58-1.7-.97-2.24-1.22s-.8-.28-.93-.27" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayBold.displayName = 'PlayBold';

// Triple export pattern (lucide-react style)
export { PlayBold, PlayBold as PlayBoldIcon, PlayBold as SiPlayBold };
export default PlayBold;
export type { PlayBoldProps };
