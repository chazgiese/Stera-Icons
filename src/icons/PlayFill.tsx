import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayFillProps = Omit<IconBaseProps, 'children'>;

const PlayFill = memo(
  forwardRef<SVGSVGElement, PlayFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-fill" {...props}>
      <path d="M6.14 1.91c.67-.07 1.32.15 1.96.44q.96.46 2.4 1.3L17.5 7.7c.97.56 1.75 1 2.33 1.41.57.4 1.08.86 1.36 1.48.4.9.4 1.94 0 2.84a4 4 0 0 1-1.36 1.47q-.87.6-2.33 1.42l-7.01 4.03q-1.44.85-2.4 1.3c-.64.3-1.29.52-1.96.45a3.5 3.5 0 0 1-2.47-1.42 4 4 0 0 1-.6-1.92Q2.97 17.7 3 16.04V7.96q-.02-1.65.06-2.71c.07-.7.2-1.37.61-1.92A3.5 3.5 0 0 1 6.14 1.9" />
    </IconBase>
  ))
);

PlayFill.displayName = 'PlayFill';

// Triple export pattern (lucide-react style)
export { PlayFill, PlayFill as PlayFillIcon, PlayFill as SiPlayFill };
export default PlayFill;
export type { PlayFillProps };
