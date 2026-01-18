import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsCircleRegularProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleRegular = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.33 6.25c.42 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75M13.67 8.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V9c0-.41.33-.75.75-.75M7 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M17 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleRegular.displayName = 'AudioBarsCircleRegular';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleRegular, AudioBarsCircleRegular as AudioBarsCircleRegularIcon, AudioBarsCircleRegular as SiAudioBarsCircleRegular };
export type { AudioBarsCircleRegularProps };
