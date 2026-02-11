import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1.33 4.75a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m2.66 2a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M8 10.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75m8 0a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 6.75c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0v-9c0-.41.33-.75.75-.75M13.33 8.75c.42 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M8 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M16 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsCircleFillDuotone.displayName = 'AudioBarsCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleFillDuotone, AudioBarsCircleFillDuotone as AudioBarsCircleFillDuotoneIcon, AudioBarsCircleFillDuotone as SiAudioBarsCircleFillDuotone };
export default AudioBarsCircleFillDuotone;
export type { AudioBarsCircleFillDuotoneProps };
