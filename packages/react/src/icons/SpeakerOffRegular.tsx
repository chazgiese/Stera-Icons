import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerOffRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffRegular = memo(
  forwardRef<SVGSVGElement, SpeakerOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-2.72-2.72v.17a2 2 0 0 1-3.41 1.42l-3.5-3.5a.5.5 0 0 0-.36-.15H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 1.94-2L3.47 4.53a.75.75 0 0 1 0-1.06m3.78 6.28a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2.23a2 2 0 0 1 1.42.59l3.5 3.5c.31.31.85.09.85-.36v-1.67L8.69 9.75z" clipRule="evenodd" />
        <path fill="currentColor" d="M13.34 4.6a2 2 0 0 1 3.41 1.42v5.73a.75.75 0 0 1-1.5 0V6.02a.5.5 0 0 0-.85-.36l-2.25 2.25a.75.75 0 0 1-1.06-1.06z" />
    </IconBase>
  ))
);

SpeakerOffRegular.displayName = 'SpeakerOffRegular';

export { SpeakerOffRegular };
export type { SpeakerOffRegularProps };
