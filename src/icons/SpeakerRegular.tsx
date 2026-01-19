import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerRegularProps = Omit<IconBaseProps, 'children'>;

const SpeakerRegular = memo(
  forwardRef<SVGSVGElement, SpeakerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.34 4.6a2 2 0 0 1 3.41 1.42v11.96a2 2 0 0 1-3.41 1.42l-3.5-3.5a.5.5 0 0 0-.36-.15H7.25a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h2.23a.5.5 0 0 0 .36-.15zm1.91 1.42a.5.5 0 0 0-.85-.36l-3.5 3.5a2 2 0 0 1-1.42.59H7.25a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2.23a2 2 0 0 1 1.42.59l3.5 3.5c.31.31.85.09.85-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerRegular.displayName = 'SpeakerRegular';

// Triple export pattern (lucide-react style)
export { SpeakerRegular, SpeakerRegular as SpeakerRegularIcon, SpeakerRegular as SiSpeakerRegular };
export type { SpeakerRegularProps };
