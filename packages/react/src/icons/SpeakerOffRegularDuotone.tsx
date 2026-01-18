import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.69 9.75H7.25a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2.23a2 2 0 0 1 1.42.59l3.5 3.5c.31.31.85.09.85-.36v-1.67l1.5 1.5v.17a2 2 0 0 1-3.41 1.42l-3.5-3.5a.5.5 0 0 0-.36-.15H7.25a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 1.94-2zM13.34 4.6a2 2 0 0 1 3.41 1.42v5.73a.75.75 0 0 1-1.5 0V6.02a.5.5 0 0 0-.85-.36l-2.25 2.25a.75.75 0 0 1-1.06-1.06z" />
        <path fill="currentColor" d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

SpeakerOffRegularDuotone.displayName = 'SpeakerOffRegularDuotone';

export { SpeakerOffRegularDuotone };
export type { SpeakerOffRegularDuotoneProps };
