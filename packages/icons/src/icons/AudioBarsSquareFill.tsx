import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsSquareFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsSquareFill = memo(
  forwardRef<SVGSVGElement, AudioBarsSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-2.33 4.38c-.49 0-.88.39-.88.87v9c0 .48.4.88.88.88s.87-.4.87-.88v-9c0-.48-.39-.87-.87-.87m2.66 2c-.48 0-.87.39-.87.87v5c0 .48.39.87.87.88.49 0 .88-.4.88-.88v-5c0-.48-.4-.87-.88-.87M8 10.13c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87m8 0c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsSquareFill.displayName = 'AudioBarsSquareFill';

// Triple export pattern
export { AudioBarsSquareFill, AudioBarsSquareFill as AudioBarsSquareFillIcon, AudioBarsSquareFill as SiAudioBarsSquareFill };
export default AudioBarsSquareFill;
export type { AudioBarsSquareFillProps };
