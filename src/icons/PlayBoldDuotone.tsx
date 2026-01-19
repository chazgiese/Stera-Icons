import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlayBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlayBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-bold-duotone" {...props}>
      <path fill="currentColor" d="M4.38 4c-.12.17-.25.48-.31 1.2C4 5.94 4 6.9 4 8.28v7.46c0 1.38 0 2.34.07 3.06.06.73.19 1.04.31 1.21l-.81.59-.8.59a4.3 4.3 0 0 1-.7-2.2q-.09-1.25-.07-3.25V8.27c0-1.34 0-2.41.08-3.24s.23-1.6.68-2.2z" opacity={.4} />
        <path fill="currentColor" d="M5.57 1.2c.76-.09 1.5.15 2.25.5q1.13.52 2.86 1.53l6.52 3.73q1.77 1 2.82 1.7c.69.48 1.27 1 1.58 1.7a4 4 0 0 1 0 3.27c-.3.7-.9 1.23-1.58 1.7-.7.5-1.64 1.03-2.82 1.7l-6.52 3.73q-1.73 1.02-2.86 1.55c-.76.34-1.5.58-2.25.5a4 4 0 0 1-2.8-1.63L4.37 20a2 2 0 0 0 1.4.82c.21.02.55-.03 1.21-.33s1.5-.78 2.7-1.46l6.52-3.73c1.21-.7 2.06-1.18 2.66-1.6s.82-.69.9-.88a2 2 0 0 0 0-1.64c-.08-.2-.3-.46-.9-.88s-1.45-.9-2.66-1.6L9.68 4.97A38 38 0 0 0 7 3.51c-.66-.3-1-.35-1.2-.33A2 2 0 0 0 4.37 4L2.76 2.82a4 4 0 0 1 2.8-1.63" />
    </IconBase>
  ))
);

PlayBoldDuotone.displayName = 'PlayBoldDuotone';

// Triple export pattern (lucide-react style)
export { PlayBoldDuotone, PlayBoldDuotone as PlayBoldDuotoneIcon, PlayBoldDuotone as SiPlayBoldDuotone };
export default PlayBoldDuotone;
export type { PlayBoldDuotoneProps };
