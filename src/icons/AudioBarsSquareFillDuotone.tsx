import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1.83 4c-.49 0-.88.39-.88.87v9a.88.88 0 0 0 1.75 0v-9c0-.48-.39-.87-.87-.87m2.66 2c-.48 0-.87.39-.87.87v5a.88.88 0 0 0 1.75 0v-5c0-.48-.4-.87-.88-.87M8 10.13c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.75 0v-2c0-.48-.4-.87-.88-.87m8 0c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 6.63c.48 0 .87.39.87.87v9a.88.88 0 0 1-1.75 0v-9c0-.48.4-.87.88-.87M13.33 8.63c.49 0 .88.39.88.87v5a.87.87 0 1 1-1.75 0v-5c0-.48.39-.87.87-.87M8 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87M16 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.75 0v-2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AudioBarsSquareFillDuotone.displayName = 'AudioBarsSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsSquareFillDuotone, AudioBarsSquareFillDuotone as AudioBarsSquareFillDuotoneIcon, AudioBarsSquareFillDuotone as SiAudioBarsSquareFillDuotone };
export default AudioBarsSquareFillDuotone;
export type { AudioBarsSquareFillDuotoneProps };
