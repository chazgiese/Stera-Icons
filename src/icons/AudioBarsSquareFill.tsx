import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsSquareFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsSquareFill = memo(
  forwardRef<SVGSVGElement, AudioBarsSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-square-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-2.93 3.75a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m2.66 2a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M8 10.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75m8 0a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsSquareFill.displayName = 'AudioBarsSquareFill';

// Triple export pattern (lucide-react style)
export { AudioBarsSquareFill, AudioBarsSquareFill as AudioBarsSquareFillIcon, AudioBarsSquareFill as SiAudioBarsSquareFill };
export default AudioBarsSquareFill;
export type { AudioBarsSquareFillProps };
