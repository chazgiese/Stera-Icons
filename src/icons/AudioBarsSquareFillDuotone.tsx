import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-2.93 3.75a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m2.66 2a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M8 10.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75m8 0a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 6.75c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0v-9c0-.41.33-.75.75-.75M13.33 8.75c.42 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M8 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M16 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsSquareFillDuotone.displayName = 'AudioBarsSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsSquareFillDuotone, AudioBarsSquareFillDuotone as AudioBarsSquareFillDuotoneIcon, AudioBarsSquareFillDuotone as SiAudioBarsSquareFillDuotone };
export default AudioBarsSquareFillDuotone;
export type { AudioBarsSquareFillDuotoneProps };
